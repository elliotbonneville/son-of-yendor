import requiredProp from '~/utils/requiredProp';

const keysByCode = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
};

for (let letter = 65; letter < 91; letter++) {
    keysByCode[letter] = String.fromCharCode(letter).toLowerCase();
}

const keysByName = Object.keys(keysByCode).reduce(
    (acc, keyCode) => ({ ...acc, [keysByCode[keyCode]]: keyCode }),
    {},
);

const listen = ({
    callback = requiredProp('callback'),
    eventType = requiredProp('down'),
    keyCode = requiredProp('keyCode'),

    listeners = {},
}) => {
    const eventListeners = listeners[eventType] || [];
    return {
        ...listeners,
        [eventType]: {
            ...eventListeners,
            [keyCode]: [
                ...(eventListeners[keyCode] || []),
                callback,
            ],
        },
    }
};

const stopListening = ({
    callback = requiredProp('callback'),
    eventType = requiredProp('eventType'),
    keyCode = requiredProp('keyCode'),

    listeners = {},
}) => {
    const eventListeners = listeners[eventType] || [];
    return {
        ...listeners,
        [eventType]: {
            ...eventListeners,
            [keyCode]: eventListeners[keyCode].filter(
                existingCallback => existingCallback !== callback,
            ),
        },
    };
};

function createDOMListener({
    getListeners = requiredProp('listeners'),
    eventType = requiredProp('eventType'),
}) {
    return event => {
        const eventListeners = getListeners()[eventType];
        if (eventListeners[event.which]) {
            event.preventDefault();
            eventListeners[event.which].forEach(listener => listener());
        }
    };
}

export default function createInputManager() {
    let listeners = { up: {}, down: {} };
    const getListeners = () => listeners;
    const domListeners = {
        keydown: createDOMListener({ eventType: 'down', getListeners }),
        keyup: createDOMListener({ eventType: 'up', getListeners }),
    };

    return {
        listen: ({
            callback = requiredProp('callback'),
            key = requiredProp('key'),

            eventType = 'down',
        }) => {
            const keyCode = keysByName[key];
            listeners = listen({
                listeners,
                callback,
                eventType,
                keyCode,
            });

            return () => {
                listeners = stopListening({
                    listeners,
                    callback,
                    eventType,
                    keyCode,
                });
            };
        },
        init: () => {
            Object.entries(domListeners).forEach(([name, listener]) => {
                document.addEventListener(name, listener);
            });
        },
        destroy: () => {
            Object.entries(domListeners).forEach(([name, listener]) => {
                document.removeEventListener(name, listener);
            });
        },
    };
}

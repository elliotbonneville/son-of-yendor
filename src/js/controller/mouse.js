import requiredProp from '~/utils/requiredProp';

function createDOMListener({
    getListeners = requiredProp('listeners'),
    eventType = requiredProp('eventType'),
}) {
    return (event) => {
        const eventListeners = getListeners()[eventType];
        if (eventListeners[event.which]) {
            event.preventDefault();
            eventListeners[event.which].forEach(listener => listener());
        }
    };
}

function addMouseListeners({
    cells = requiredProp('cells'),
    callback = requiredProp('callback')
}) {
    const events = ['mousedown', 'mouseup', 'mouseenter'];
    Object.entries(cells).forEach(([coordinates, node]) => {
        const [x, y] = coordinates.split(',');
        events.forEach(eventName => node.addEventListener(
            eventName,
            event => callback({
                event,
                eventName,
                location: { x, y },
            }),
        ));
    });
}

export default function createMouseManager(
    renderer = requiredProp('renderer'),
) {
    let listeners = {};

    return {
        on: ({
            callback = requiredProp('callback'),
            eventName = requiredProp('eventName'),
        }) => {
            listeners = {
                ...listeners,
                [eventName]: [
                    ...(listeners[eventName] || []),
                    callback,
                ],
            };

            return () => {
                listeners = {
                    ...listeners,
                    [eventName]: listeners[eventName].filter(
                        listener => listener !== callback,
                    ),
                };
            };
        },
        init: () => {
            addMouseListeners({
                callback: ({
                    event,
                    eventName,
                    location
                }) => {
                    if (!listeners[eventName]) return;

                    listeners[eventName].forEach(
                        listener => listener({ event, eventName, location }),
                    );
                },
                cells: renderer.cells,
            });
        },
    };
}

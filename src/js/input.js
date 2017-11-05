const keysByCode = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
};

for (let letter = 65; letter < 91; letter++) {
    keysByCode[letter] = String.fromCharCode(letter).toLowerCase();
}

const keysByName = Object
    .keys(keysByCode)
    .reduce(
        (acc, code) => Object.assign(acc, { [keysByCode[code]]: code }),
        {},
    );

const listeners = {up: {}, down: {}};

export function bindKeyListener(direction, key, listener) {
    const directionListeners = listeners[direction];
    const which = keysByName[key];
    if (directionListeners[which]) {
        directionListeners[which].push(listener);
    } else {
        directionListeners[which] = [listener];
    }
}

export function unbindKeyListener(direction, key, listener) {
    const which = keysByName[key];
    const directionListeners = listeners[direction][which];
    directionListeners.splice(directionListeners.indexOf(listener), 1);
}

function callListeners(direction, event) {
    const directionListeners = listeners[direction][event.which];
    if (directionListeners) {
        event.preventDefault();
        directionListeners.forEach(listener => listener());
    }
}

export function init() {
    document.addEventListener('keydown', callListeners.bind(null, 'down'));
    document.addEventListener('keyup', callListeners.bind(null, 'up'));
}

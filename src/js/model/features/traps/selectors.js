export function getTraps(state) {
    return state.traps;
}

export function getTrap(state, { id }) {
    return getTraps(state)[id];
}

export function getNextTrapId(state) { 
    return Object.keys(getTraps(state)).length;
}

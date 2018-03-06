export function getTime(state) {
    return state.time;
}

export function getTick(state) {
    return getTime(state).tick;
}

export function getPaused(state) {
    return getTime(state).paused;
}

export function getStatus(state) {
    return state.status;
}

export function getGameStatus(state) {
    return getStatus(state).gameStatus;
}

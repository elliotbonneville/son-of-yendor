export function getStats(state) {
    return state.stats;
}

export function getMana(state) {
    return getStats(state).mana;
}

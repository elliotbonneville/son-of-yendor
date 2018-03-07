export function getItems(state) {
    return state.items;
}

export function getItem(state, { id }) {
    return getItems(state)[id];
}

export function getNextItemId(state) { 
    return Object.keys(getItems(state)).length;
}

export function getItems(state) {
    return state.items;
}

export function getItemValue(state, { id }) {
    return 10;
}

export function getItemsWithValues(state) {
    return Object.values(getItems(state)).map(
        item => ({ ...item, value: getItemValue(state, item) })
    );
}

export function getItem(state, { id }) {
    return getItems(state)[id];
}

export function getNextItemId(state) { 
    return Object.keys(getItems(state)).length;
}

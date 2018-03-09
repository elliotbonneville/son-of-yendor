import { createSelector } from '~/model/utils';
import positionsEqual from '~/utils/positionsEqual';

export function getItems(state) {
    return state.items;
}

export function getItem(state, { id }) {
    return getItems(state)[id];
}

export const getItemsOnFloor = createSelector(
    [getItems],
    (items) => Object.entries(items)
        .filter(([id, item]) => item.position)
        .reduce(
            (items, [id, item]) => Object.assign(items, { [id]: item }),
            {},
        ),
);

export function getItemsByPosition(
    state,
    {
        items = getItemsOnFloor(state),
        position,
    }
) {
    return Object.values(getItemsOnFloor(state)).filter(
        item => positionsEqual(position, item.position)
    );
}

export function getTotalValue(items) {
    return items.length
        ? items.reduce((totalValue, item) => totalValue + item.data.value, 0)
        : 0;
}

export const getValueOfItemsOnFloor = createSelector(
    [getItemsOnFloor],
    (itemsOnFloor) => getTotalValue(Object.values(itemsOnFloor)),
);

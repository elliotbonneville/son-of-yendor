import createItem from './utils/createItem';

export default (state, { items }) => Object.assign(
    {},
    state,
    ...items.map(({ id, itemType, position }) => ({
        [id]: createItem({ id, itemType, position }),
    })),
);

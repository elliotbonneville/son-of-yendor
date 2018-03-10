export default (items, { itemId, position }) => {
    return {
        ...items,
        [itemId]: { ...items[itemId], position },
    };
};

export default (items, { itemId }) => ({
    ...items,
    [itemId]: { ...items[itemId], position: undefined },
});

export default (items, { item }) => ({
    ...items,
    [item.id]: { ...item, position: undefined },
});

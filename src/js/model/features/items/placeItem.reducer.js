export default (items, { id, position }) => {
    return {
        ...items,
        [id]: { ...items[id], position },
    };
};

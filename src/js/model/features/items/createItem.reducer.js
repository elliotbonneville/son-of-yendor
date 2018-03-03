const createItem = (state, action) => ({
    ...state,
    [action.id]: action.item,
});

export default createItem;

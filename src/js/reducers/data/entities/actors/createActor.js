const createActor = (state, action) => ({
    ...state,
    [action.id]: action.actor,
});

export default createActor;

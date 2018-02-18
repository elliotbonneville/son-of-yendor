export function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    }
}

export function combineReducers(reducers) {
    const reducerKeys = Object.keys(reducers);
    const combinedReducers = reducerKeys.reduce(
        (combination, reducerKey) => ({
            ...combination,
            [reducerKey]: reducers[reducerKey],
        }),
        {},
    );

    return (state = {}, action) =>
        reducerKeys.reduce(
            (reducer, reducerKey) => ({
                ...reducer,
                [reducerKey]: combinedReducers[reducerKey](state[reducerKey], action),
            }),
            {},
        );
}

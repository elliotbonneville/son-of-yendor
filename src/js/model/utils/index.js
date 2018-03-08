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
                [reducerKey]: combinedReducers[reducerKey](
                    state[reducerKey],
                    action,
                ),
            }),
            {},
        );
}

export function createSelector(selectors, selector) {
    let computedValue;
    let selectedValues = [];
    let state;

    return (newState) => {
        // If state hasn't changed, don't bother checking selectors just return
        // previous value right away as it won't have changed
        if (state === newState && computedValue) return computedValue;

        // Get selected values from new state
        const newSelectedValues = selectors.map(selector => selector(newState));
        const valuesUnchanged = newSelectedValues.every(
            (value, i) => value === selectedValues[i],
        );

        // If state has changed but the values from which the computed value is
        // derived haven't, return the computed value as it won't have changed
        if (valuesUnchanged) return computedValue;

        // If we reach this point we have to compute the value again
        selectedValues = newSelectedValues;
        computedValue = selector(...selectedValues);
        return computedValue;
    };
}

export function applyMiddleware(store, passedInMiddlewares) {
    const middlewares = passedInMiddlewares.slice();
    middlewares.reverse();
    let dispatch = store.dispatch;
    middlewares.forEach(middleware => (dispatch = middleware(store)(dispatch)));
    return Object.assign({}, store, { dispatch });
}

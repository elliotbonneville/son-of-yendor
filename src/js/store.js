export default function store(initialState = {}, reducer) {
    let state = initialState;
    
    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
    };

    const listen = (actions, callback) => {};

    const stopListening = (actions, listener) => {};

    dispatch({ type: 'INIT' });
    return { getState, dispatch, listen, stopListening };
}

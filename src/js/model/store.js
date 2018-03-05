export default function store(reducer, initialState = {}) {
    const listeners = []
    let state = initialState;
    
    const getState = () => state;

    const dispatch = (...actions) => {
        actions.forEach(action => {
            const previousState = state;
            state = reducer(state, action);
            listeners.forEach(listener => listener(state));
        });
    };

    const listen = (callback) => {
        listeners.push(callback);

        // return a function to remove all of the listeners just created
        return () => {
            listeners = listeners.filter(listener => listener !== callback);
        };
    };

    dispatch({ type: 'INIT' });
    return { getState, dispatch, listen };
}

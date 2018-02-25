export default function store(reducer, initialState = {}) {
    const listeners = {};
    let state = initialState;
    
    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        
        const actionListeners = listeners[action.type];
        if (actionListeners) {
            actionListeners.forEach(listener => listener(action, state));
        }
    };

    const listen = (actions, callback) => {
        actions.forEach(actionType => {
            listeners[actionType] = [
                ...(listeners[actionType] || []),
                callback,
            ];
        })
    };

    const stopListening = (actions, listener) => {
        actions.forEach(actionType => {
            listeners[actionType] = listeners[actionType].filter(
                actionListener => actionListener !== listener,
            );
        });
    };

    dispatch({ type: 'INIT' });
    return { getState, dispatch, listen, stopListening };
}

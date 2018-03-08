import { applyMiddleware } from '~/model/utils';

export default function store(reducer, middlewares, initialState = {}) {
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

    const store = { getState, dispatch, listen };
    const enhancedStore = applyMiddleware(store, middlewares);
    enhancedStore.dispatch({ type: 'INIT' });
    return enhancedStore;
}

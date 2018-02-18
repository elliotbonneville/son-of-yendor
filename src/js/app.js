import { rootReducer } from '~/reducers';
import createStore from '~/store';

function init() {
    console.log('Initializing game');
    window.store = createStore(undefined, rootReducer);
}

init();

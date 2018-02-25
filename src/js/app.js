// model
import { rootReducer } from '~/reducers';
import createStore from '~/store';
import { createLevel, loadLevel } from '~/actions/data/levels';

// view
import { createRenderer } from '~/renderer';

console.log('Initializing game');
const node = document.getElementById('app');
const store = window.store = createStore(rootReducer);
const destroyRenderer = createRenderer({ node, store });
store.dispatch(createLevel(0, Date.now()));
store.dispatch(loadLevel(0));

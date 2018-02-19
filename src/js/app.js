import { rootReducer } from '~/reducers';
import createStore from '~/store';

import { createLevel, loadLevel } from '~/actions/data/levels';

import { init as initRenderer } from '~/renderer/init';

console.log('Initializing game');
const store = window.store = createStore(rootReducer);
initRenderer(store);
store.dispatch(createLevel(0, Date.now()));
store.dispatch(loadLevel(0));

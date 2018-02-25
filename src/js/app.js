// model
import { rootReducer } from '~/reducers';
import createStore from '~/store';
import { createLevel, loadLevel } from '~/actions/data/levels';

// view
import { createRenderer } from '~/renderer';

// controller
import { createInputManager } from '~/input';

const container = document.getElementById('app');
const store = createStore(rootReducer);
const inputManager = createInputManager({ store });
const renderer = createRenderer({ container, store });

function init() {
    console.log('Initializing game');

    inputManager.init();
    renderer.init();

    store.dispatch(
        createLevel({
            id: 0,
            seed: Date.now(),
            levelType: 'plain',
        }),
    );

    store.dispatch(loadLevel(0));

    inputManager.listen({
        key: 'down',
        callback: () => console.log('down key pressed'),
    });
}

function destroy() {
    renderer.destroy();
}

window.game = {
    destroy,
    init,
    renderer,
    store,
};

init();

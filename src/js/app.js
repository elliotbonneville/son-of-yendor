// model
import { rootReducer } from '~/model';
import createStore from '~/model/store';
import createLevel from '~/model/features/level/createLevel.action';

// view
import { createRenderer } from '~/view/renderer';
import View from '~/view';

// controller
import { createInputManager } from '~/controller/input';

const container = document.getElementById('app');
const store = createStore(rootReducer);
const inputManager = createInputManager({ store });
const renderer = createRenderer({ container });
const view = View(store, renderer);

function init() {
    inputManager.init();
    renderer.init();

    store.dispatch(
        createLevel({
            seed: Date.now(),
            levelType: 'cavern',
        }),
    );
}

function destroy() {
    renderer.destroy();
}

window.game = { destroy, init, renderer, store, view };

init();

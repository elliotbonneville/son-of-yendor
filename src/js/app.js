// model
import { rootReducer } from '~/model';
import createStore from '~/model/store';
import createLevel from '~/model/features/level/createLevel.action';

// view
import { createRenderer } from '~/view/renderer';

// controller
import { createInputManager } from '~/controller/input';

const container = document.getElementById('app');
const store = createStore(rootReducer);
const inputManager = createInputManager({ store });
const renderer = createRenderer({ container, store });

function init() {
    inputManager.init();
    renderer.init();

    store.dispatch(
        createLevel({
            seed: Date.now(),
            levelType: 'plain',
        }),
    );
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

// model
import { rootReducer } from '~/model';
import createStore from '~/model/store';
import createLevel from '~/model/features/level/createLevel.action';

// view
import { createRenderer } from '~/view/renderer';
import View from '~/view';

// controller
import createController from '~/controller';

const container = document.getElementById('app');
const store = createStore(rootReducer);
const renderer = createRenderer({ container });
const controller = createController({ store, renderer });
const view = View({
    store,
    renderer,
    controller,
});

function init() {
    renderer.init();
    controller.init();

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

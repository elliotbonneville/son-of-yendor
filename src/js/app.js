// model
import { rootReducer } from '~/model';
import createStore from '~/model/store';
import createWorld from '~/model/world';

import createLevel from '~/model/features/level/createLevel.action';
import createActor from '~/model/features/actors/createActor.action';
import tick from '~/model/features/time/tick.action';

// view
import { createRenderer } from '~/view/renderer';
import View from '~/view';

// controller
import createController from '~/controller';

const container = document.getElementById('app');
const store = createStore(rootReducer);
const renderer = createRenderer({ container });
const controller = createController({ store, renderer });
const view = View({ store, renderer, controller });
const world = createWorld({ store });

function init() {
    renderer.init();
    controller.init();
    world.init();

    store.dispatch(
        createLevel({
            seed: Date.now(),
            levelType: 'cavern',
        }),
        createActor({
            id: 0,
            actorType: 'adventurer',
            position: { x: 5, y: 5 },
        }),
    );

    // start clock
    setInterval(() => store.dispatch(tick()), 500);
}

function destroy() {
    renderer.destroy();
}

window.game = { destroy, init, renderer, store, view };

init();

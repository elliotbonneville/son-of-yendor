import Pane from '~/view/Pane';

import Map from '~/view/components/Map';

import { GAME_WIDTH, GAME_HEIGHT } from '~/constants';

export default (store, renderer) => {
    const view = new Pane({
        renderer,
        store,

        x: 0,
        y: 0,
        width: GAME_WIDTH,
        height: GAME_HEIGHT,

        children: [
            // Panes

            // Components
            Map(),
        ],
    });

    store.listen((newState) => {
        view.onStateChange(newState);
        view.render({ offsetX: 0, offsetY: 0 });
        view.blit({ renderer });
    });

    return view;
}

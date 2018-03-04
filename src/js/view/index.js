import Pane from '~/view/Pane';

// Panes
import Stats from '~/view/panes/Stats';
import Messages from '~/view/panes/Messages';
import Menu from '~/view/panes/Menu';

// Components
import Map from '~/view/components/Map';

import { GAME_WIDTH, GAME_HEIGHT } from '~/constants';

export default (store, renderer) => {
    const view = new Pane({
        x: 0,
        y: 0,
        width: GAME_WIDTH,
        height: GAME_HEIGHT,
        children: [
            // Panes
            Messages(),
            Stats(),
            Menu(),

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

import requiredProp from '~/utils/requiredProp';

import Pane from '~/view/Pane';

// Panes
import Stats from '~/view/panes/Stats';
import Messages from '~/view/panes/Messages';
import Menu from '~/view/panes/Menu';

// Components
import Map from '~/view/components/Map';
import MapControls from '~/view/components/MapControls';

import { GAME_WIDTH, GAME_HEIGHT } from '~/constants';

export default ({
    store = requiredProp('store'),
    renderer = requiredProp('renderer'),
    controller = requiredProp('controller'),
}) => {
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
            MapControls(store),
        ],
    });

    store.listen((newState) => {
        view.onStateChange(newState);
        view.render({ offsetX: 0, offsetY: 0 });
        view.blit({ renderer });
    });

    const mouseEvents = ['mousedown', 'mouseup', 'mouseenter'];
    mouseEvents.forEach(eventName =>
        controller.mouse.on({ eventName, callback: view.handleMouseEvent }),
    );

    return view;
}

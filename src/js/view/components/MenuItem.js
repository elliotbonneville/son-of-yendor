import { GAME_WIDTH, MAP_WIDTH } from '~/constants';

import Component from '~/view/Component';
import label from '~/view/label';

export default ({ active, text, y, mouseListeners }) => new Component({
    x: 1,
    y,
    width: GAME_WIDTH - MAP_WIDTH,
    height: 1,
    mouseListeners,
    render() {
        return label({
            text: active ? `${text}` : text,
            foregroundColor: active ? 'purple' : 'white',
        });
    },
});

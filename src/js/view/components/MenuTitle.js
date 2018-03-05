import { GAME_WIDTH, MAP_WIDTH } from '~/constants';

import Component from '~/view/Component';

import label from '~/view/label';

const menuWidth = GAME_WIDTH - MAP_WIDTH;

export default ({ title, y }) => new Component({
    x: 3,
    y,
    width: GAME_WIDTH - MAP_WIDTH,
    height: 1,
    render() {
        return label({
            text: title,
        });
    },
});

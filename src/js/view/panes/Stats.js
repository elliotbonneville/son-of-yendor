import { GAME_WIDTH } from '~/constants';

import Pane from '~/view/Pane';
import Component from '~/view/Component';
import label from '~/view/label';

import { getValueOfItemsOnFloor } from '~/model/features/items/selectors';
import { getMana } from '~/model/features/stats/selectors';

export default () => new Pane({
    x: 0,
    y: 0,
    width: GAME_WIDTH,
    height: 1,
    children: [
        // Render amount of gems
        new Component({
            x: 0,
            y: 0,
            width: 15,
            height: 1,
            selectState: (newState) => ({
                treasure: getValueOfItemsOnFloor(newState),
            }),
            render() {
                return label({
                    text: `Treasure: ${this.state.treasure}`,
                });
            }
        }),

        // Render amount of mana
        new Component({
            x: 17,
            y: 0,
            width: 14,
            height: 1,
            selectState(newState) {
                return { mana: getMana(newState) };
            },
            render() {
                return label({
                    text: `Power: ${this.state.mana}`,
                });
            }
        }),
    ],
});

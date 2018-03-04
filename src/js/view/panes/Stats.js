import { GAME_WIDTH } from '~/constants';

import Pane from '~/view/Pane';
import Component from '~/view/Component';
import label from '~/view/label';

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
            width: 12,
            height: 1,
            selectState(newState) {
                this.setState({ gems: 5000 });
            },
            render() {
                return label({
                    text: `Gems: ${this.state.gems}`,
                });
            }
        }),

        // Render amount of mana
        new Component({
            x: 14,
            y: 0,
            width: 7,
            height: 1,
            selectState(newState) {
                this.setState({ mana: 100 });
            },
            render() {
                return label({
                    text: `Mana: ${this.state.mana}`,
                });
            }
        }),
    ],
});

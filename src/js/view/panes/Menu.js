import { GAME_WIDTH, GAME_HEIGHT, MAP_WIDTH } from '~/constants';

import Pane from '~/view/Pane';

import MenuItem from '~/view/components/MenuItem';

export default () => new Pane({
    x: MAP_WIDTH,
    y: 0,
    width: GAME_WIDTH - MAP_WIDTH,
    height: GAME_HEIGHT,
    selectState() {
        const newState = {
            items: [
                {
                    text: 'Default',
                },
                {
                    text: 'Floor',
                    active: true,
                },
                {
                    text: 'Wall',
                },
                {
                    text: 'Items',
                },
            ],
        };

        this.children = newState.items.map(({ text, active }, i) =>
            MenuItem({ text, y: i + 3, active }),
        );

        return newState;
    },
    children: [],
});

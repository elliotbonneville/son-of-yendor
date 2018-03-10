import { GAME_WIDTH, GAME_HEIGHT } from '~/constants';

import Component from '~/view/Component';
import label from '~/view/label';
import plainScreen from '~/view/plainScreen';

import { getStatus } from '~/model/features/status/selectors';

export default () => new Component({
    x: 0,
    y: 0,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    selectState: newState => getStatus(newState),
    render() {
        const { gameStatus, message } = this.state;

        if (gameStatus === 'playing') return {};

        return Object.assign(
            plainScreen(),
            label({
                x: parseInt((GAME_WIDTH / 2) - (message.length / 2)),
                y: parseInt(GAME_HEIGHT / 2),
                text: message,
            }),
        );
    },
});

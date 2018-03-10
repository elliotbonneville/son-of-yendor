import { GAME_WIDTH, GAME_HEIGHT } from '~/constants';

import Component from '~/view/Component';
import label from '~/view/label';
import plainScreen from '~/view/plainScreen';

import { getStatus } from '~/model/features/status/selectors';

const winMessage = 'Congrats, you slew the rogue and beat the game!';
const loseMessage = 'You lost: the rogue escaped... at least the good guy won!';

export default () => new Component({
    x: 0,
    y: 0,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    selectState: newState => ({ status: getStatus(newState) }),
    render() {
        const { status } = this.state;

        if (status === 'playing') return {};

        const message = (status === 'won') ? winMessage : loseMessage;
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

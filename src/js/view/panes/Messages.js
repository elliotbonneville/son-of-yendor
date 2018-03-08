import takeRight from 'lodash/takeright';

import { GAME_WIDTH, GAME_HEIGHT, MAP_HEIGHT } from '~/constants';

import Pane from '~/view/Pane';
import Message from '~/view/components/Message';

import { getMessages } from '~/model/features/ui/messages/selectors';

const messagePanelHeight = GAME_HEIGHT - MAP_HEIGHT - 1;
const colorGradient = [
    '#444',
    '#666',
    '#888',
    '#BBB',
    '#FFF',
];

export default () => new Pane({
    x: 0,
    y: 1 + MAP_HEIGHT,
    width: GAME_WIDTH - 10,
    height: messagePanelHeight,
    selectState(state) {
        const selectedState = {
            scrollback: 0,
            messages: takeRight(getMessages(state), messagePanelHeight),
        };

        this.children = selectedState.messages.map(
            (message, i) => Message({
                message,
                y: i,
                foregroundColor: colorGradient[
                    i + 5 - selectedState.messages.length
                ],
            }),
        );

        return selectedState;
    },
});

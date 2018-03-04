import { GAME_WIDTH, GAME_HEIGHT, MAP_HEIGHT } from '~/constants';

import Pane from '~/view/Pane';

import Message from '~/view/components/Message';

export default () => new Pane({
    x: 0,
    y: 1 + MAP_HEIGHT,
    width: GAME_WIDTH - 10,
    height: GAME_HEIGHT - 1 - MAP_HEIGHT,
    selectState() {
        const selectedState = {
            scrollback: 0,
            messages: [
                'hello world',
                'the <foo> hits the <bar> for lots of damage',
                'holy crap it\'s working',
                'another delicious message',
                'nom nom nom',
            ],
        };

        this.children = selectedState.messages.map(
            (message, i) => Message({ message, y: i }),
        );

        return selectedState;
    },
});

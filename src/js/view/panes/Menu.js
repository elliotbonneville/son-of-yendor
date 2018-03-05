import { GAME_WIDTH, GAME_HEIGHT, MAP_WIDTH } from '~/constants';

import Pane from '~/view/Pane';
import MenuItem from '~/view/components/MenuItem';
import MenuTitle from '~/view/components/MenuTitle';
import Button from '~/view/components/Button';

import {
    actions as modeActions,
    selectors as modeSelectors,
} from '~/model/features/ui/mode';

export default store => new Pane({
    x: MAP_WIDTH,
    y: 0,
    width: GAME_WIDTH - MAP_WIDTH,
    height: GAME_HEIGHT,
    selectState(state) {
        const activeMenu = modeSelectors.getActiveMenu(state);
        const mode = modeSelectors.getMode(state);
        const newState = {
            title: activeMenu.title,
            items: activeMenu.children.map((child) => ({
                mode: child.mode,
                text: child.title,
                active: child.mode === mode[0],
                activate: () => {
                    if (mode.length === 2 && !child.children) {
                        store.dispatch(modeActions.popMode());
                    }

                    store.dispatch(modeActions.pushMode(child.mode));
                },
            })),
        };

        this.children = [
            Button({
                character: '<',
                x: 1,
                y: 0,
                visible: modeSelectors.getMode(state).length,
                mouseListeners: {
                    mousedown: [
                        () => store.dispatch(modeActions.popMode()),
                    ],
                },
            }),
            MenuTitle({
                title: activeMenu.title,
                y: 0,
            }),
            ...newState.items.map(({ text, active, activate, mode }, i) =>
                MenuItem({
                    text,
                    y: i + 2,
                    active,
                    mouseListeners: { mousedown: [activate] },
                }),
            ),
        ];

        return newState;
    },
    children: [],
});

import ui from '~/model/features/ui/selectors';

import toolTypes from '~/controller/tools/toolTypes';
import toolData from '~/controller/tools';

export const getMode = state => ui(state).mode;

const getMenuByMode = ({ mode, children }) => {
    if (!children) return undefined;
    return children.filter(child => child.mode === mode)[0];
}

export const getActiveMenu = (state) => {
    const mode = getMode(state);
    return mode.reduce(
        (menu, mode) => {
            const submenu = getMenuByMode({
                mode,
                children: menu.children,
            });

            return submenu ? submenu : menu;
        },
        toolData[toolTypes.OBSERVE].menu,
    );
}

export const getActiveMenuItem = (state) => {
    return getMode(state).reduce(
        (menu, mode) => {
            const child = getMenuByMode({
                mode,
                children: menu.children,
            });

            return child ? child : menu;
        },
        modeData,
    );
}

export const getActiveTool = (state) => {
    const tool = [...getMode(state)].reverse()[0];
    return toolData[tool];
};

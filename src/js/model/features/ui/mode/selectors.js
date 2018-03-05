import ui from '~/model/features/ui/selectors';

import modeData from '~/controller/modes';

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
        modeData,
    );
}

export const getActiveMenuItem = (state) => {
    console.log(getMode(state));
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

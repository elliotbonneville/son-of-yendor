import rectangle from '~/utils/rectangle';

import ui from '../selectors';

export function mouseDown(state) {
    return ui(state).mouseDown;
}

export function mousePosition(state) {
    return ui(state).mousePosition;
}

export function mouseDownPosition(state) {
    return ui(state).firstMouseDownPosition;
}

export function mouseUpPosition(state) {
    return ui(state).lastMouseDownPosition;
}

export function getSelectionBounds(state, current = true) {
    const start = mouseDownPosition(state);
    const end = (current)
        ? (mouseDown(state)) ? mousePosition(state) : undefined
        : mouseUpPosition(state);

    if (!start || !end) {
        return { width: 0, height: 0 };
    }

    const left = Math.min(start.x, end.x);
    const top = Math.min(start.y, end.y);
    const right = Math.max(start.x, end.x);
    const bottom = Math.max(start.y, end.y);

    return {
        x: left,
        y: top,
        width: (right - left) + 1,
        height: (bottom - top) + 1,
    };
}

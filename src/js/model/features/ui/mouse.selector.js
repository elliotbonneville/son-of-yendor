import rectangle from '~/utils/rectangle';

import ui from './selector';

export function mouseDown(state) {
    return ui(state).mouseDown;
}

export function mousePosition(state) {
    return ui(state).mousePosition;
}

export function mouseDownPosition(state) {
    return ui(state).mouseDownPosition;
}

export function selectionBounds(state) {
    if (!mouseDown(state)) return { width: 0, height: 0 };

    const start = mouseDownPosition(state);
    const end = mousePosition(state);
    
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

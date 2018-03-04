import { SET_MOUSE_DOWN } from './types';

export default ({ mouseDown, mouseDownPosition }) => ({
    type: SET_MOUSE_DOWN,
    mouseDown,
    mouseDownPosition,
});

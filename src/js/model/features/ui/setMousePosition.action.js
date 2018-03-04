import { SET_MOUSE_POSITION } from './types';

export default ({ mousePosition }) => ({
    type: SET_MOUSE_POSITION,
    mousePosition,
});

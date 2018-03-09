import setMouseDownReducer from './setMouseDown.reducer';
import setMouseUpReducer from './setMouseUp.reducer';
import setMousePositionReducer from './setMousePosition.reducer';

import setMouseDownAction from './setMouseDown.action';
import setMouseUpAction from './setMouseUp.action';
import setMousePositionAction from './setMousePosition.action';

import { SET_MOUSE_DOWN, SET_MOUSE_UP, SET_MOUSE_POSITION } from './types';

export const reducers = {
    [SET_MOUSE_DOWN]: setMouseDownReducer,
    [SET_MOUSE_POSITION]: setMousePositionReducer,
    [SET_MOUSE_UP]: setMouseUpReducer,
};

export const actions = {
    setMouseDown: setMouseDownAction,
    setMouseUp: setMouseUpAction,
    setMousePosition: setMousePositionAction,
};

export * as selectors from './selectors';

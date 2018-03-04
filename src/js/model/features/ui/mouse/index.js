import setMouseDownReducer from './setMouseDown.reducer';
import setMousePositionReducer from './setMousePosition.reducer';

import setMouseDownAction from './setMouseDown.action';
import setMousePositionAction from './setMousePosition.action';

import { SET_MOUSE_DOWN, SET_MOUSE_POSITION } from './types';

export const reducers = {
    [SET_MOUSE_DOWN]: setMouseDownReducer,
    [SET_MOUSE_POSITION]: setMousePositionReducer,
};

export const actions = {
    setMouseDown: setMouseDownAction,
    setMousePosition: setMousePositionAction,
};

export * as selectors from './selectors';

import { createReducer } from '~/model/utils';

import setMode from './setMode.reducer';
import setMouseDown from './setMouseDown.reducer';
import setMousePosition from './setMousePosition.reducer';

import { SET_MODE, SET_MOUSE_DOWN, SET_MOUSE_POSITION } from './types';

export default createReducer(
    {
        mouseDown: false,
        mousePosition: null,
        mouseDownPosition: null,
    },
    {
        [SET_MODE]: setMode,
        [SET_MOUSE_DOWN]: setMouseDown,
        [SET_MOUSE_POSITION]: setMousePosition,
    },
);

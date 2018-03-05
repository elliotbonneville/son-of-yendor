import pushModeReducer from './pushMode.reducer';
import popModeReducer from './popMode.reducer';

import pushModeAction from './pushMode.action';
import popModeAction from './popMode.action';

import { PUSH_MODE, POP_MODE } from './types';

export const actions = {
    pushMode: pushModeAction,
    popMode: popModeAction,
};

export const reducers = {
    [PUSH_MODE]: pushModeReducer,
    [POP_MODE]: popModeReducer,
};

export * as selectors from './selectors';

export const defaultMode = [];

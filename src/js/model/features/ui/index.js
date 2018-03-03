import { createReducer } from '~/model/utils';

import setMode from './setMode.reducer';

import { SET_MODE } from './types';

export default createReducer(
    {},
    {
        [SET_MODE]: setMode,
    },
);

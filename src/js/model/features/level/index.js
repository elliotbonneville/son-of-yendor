import { createReducer } from '~/model/utils';

import createLevel from './createLevel.reducer';

import { CREATE_LEVEL } from './types';

export default createReducer(
    {},
    {
        [CREATE_LEVEL]: createLevel,
    },
);

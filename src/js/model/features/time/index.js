import { createReducer } from '~/model/utils';

import { TICK } from './types';

export default createReducer(
    0,
    {
        [TICK]: (state = 0) => state + 1,
    },
);

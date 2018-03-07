import { createReducer } from '~/model/utils';

import createTraps from '~/model/features/traps/createTraps.reducer';

import { CREATE_TRAPS } from './types';

export default createReducer(
    {},
    {
        [CREATE_TRAPS]: createTraps,
    },
);

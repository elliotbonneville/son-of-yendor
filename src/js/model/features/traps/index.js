import { createReducer } from '~/model/utils';

import createTraps from '~/model/features/traps/createTraps.reducer';
import removeTrap from '~/model/features/traps/removeTrap.reducer';

import { CREATE_TRAPS, REMOVE_TRAP } from './types';

export default createReducer(
    {},
    {
        [CREATE_TRAPS]: createTraps,
        [REMOVE_TRAP]: removeTrap,
    },
);

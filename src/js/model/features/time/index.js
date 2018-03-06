import { createReducer } from '~/model/utils';

import tick from '~/model/features/time/tick.reducer';
import setPaused from '~/model/features/time/setPaused.reducer';

import { SET_PAUSED, TICK } from './types';

export default createReducer(
    {
        tick: 0,
        paused: true,
    },
    {
        [TICK]: tick,
        [SET_PAUSED]: setPaused,
    },
);

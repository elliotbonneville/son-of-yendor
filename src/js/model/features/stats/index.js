import { createReducer } from '~/model/utils';

import modifyMana from '~/model/features/stats/modifyMana.reducer';

import { MODIFY_MANA } from './types';

export default createReducer(
    {
        mana: 100,
    },
    {
        [MODIFY_MANA]: modifyMana,
    },
);

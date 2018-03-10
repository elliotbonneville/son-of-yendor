import { createReducer } from '~/model/utils';

import win from './win.reducer';
import lose from './lose.reducer';

import { WIN, LOSE } from './types';

export default createReducer(
    'playing',
    {
        [WIN]: win,
        [LOSE]: lose,
    },
);

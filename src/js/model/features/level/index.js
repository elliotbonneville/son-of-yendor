import { createReducer } from '~/model/utils';

import createLevelReducer from './createLevel.reducer';
import setTilesReducer from './setTiles.reducer';

import { CREATE_LEVEL, SET_TILES } from './types';

export default createReducer(
    {},
    {
        [CREATE_LEVEL]: createLevelReducer,
        [SET_TILES]: setTilesReducer,
    },
);

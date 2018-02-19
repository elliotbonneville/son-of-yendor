import { createReducer } from '~/reducers/utils';
import { CREATE_LEVEL, LOAD_LEVEL } from '~/actions/data/levels/types';

import createLevel from './createLevel';
import loadLevel from './loadLevel';

export default createReducer(
    {},
    {
        [CREATE_LEVEL]: createLevel,
        [LOAD_LEVEL]: loadLevel,
    },
);

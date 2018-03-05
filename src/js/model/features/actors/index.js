import { createReducer } from '~/model/utils';

import createActor from './createActor.reducer';
import moveActor from './move.reducer'

import { CREATE_ACTOR, MOVE_ACTOR } from './types';

export default createReducer(
    {},
    {
        [CREATE_ACTOR]: createActor,
        [MOVE_ACTOR]: moveActor,
    },
);

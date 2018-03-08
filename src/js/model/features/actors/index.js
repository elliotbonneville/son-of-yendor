import { createReducer } from '~/model/utils';

import createActor from './createActor.reducer';
import moveActor from './move.reducer'
import takeDamage from './takeDamage.reducer';
import killActor from './killActor.reducer';

import { CREATE_ACTOR, MOVE_ACTOR, DAMAGE_ACTOR, KILL_ACTOR } from './types';

export default createReducer(
    {},
    {
        [CREATE_ACTOR]: createActor,
        [MOVE_ACTOR]: moveActor,
        [DAMAGE_ACTOR]: takeDamage,
        [KILL_ACTOR]: killActor,
    },
);

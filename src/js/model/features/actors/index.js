import { createReducer } from '~/model/utils';

import createActor from './createActor.reducer';
import moveActor from './move.reducer'
import takeDamage from './takeDamage.reducer';
import killActor from './killActor.reducer';
import pickUpItem from './pickUpItem.reducer';
import dropItem from './dropItem.reducer';
import leave from './leave.reducer';
import removeActor from './removeActor.reducer';
import markItinerary from './markItinerary.reducer';

import {
    CREATE_ACTOR,
    MOVE_ACTOR,
    DAMAGE_ACTOR,
    KILL_ACTOR,
    PICK_UP_ITEM,
    DROP_ITEM,
    ACTOR_LEAVE,
    REMOVE_ACTOR,
    MARK_ITINERARY,
} from './types';

export default createReducer(
    {},
    {
        [CREATE_ACTOR]: createActor,
        [MOVE_ACTOR]: moveActor,
        [DAMAGE_ACTOR]: takeDamage,
        [KILL_ACTOR]: killActor,
        [PICK_UP_ITEM]: pickUpItem,
        [DROP_ITEM]: dropItem,
        [ACTOR_LEAVE]: leave,
        [REMOVE_ACTOR]: removeActor,
        [MARK_ITINERARY]: markItinerary,
    },
);

import positionsEqual from '~/utils/positionsEqual';
import requiredProp from '~/utils/requiredProp';

import { createSelector } from '~/model/utils';

import { getTraps } from './selectors';
import { getActorById } from '~/model/features/actors/selectors';

import { MOVE_ACTOR } from '~/model/features/actors/types';

import * as trapBehaviors from '~/model/data/traps/behaviors';

export default ({
    store = requiredProp('store'),
}) => {
    store.listen((newState, action) => {
        if (action.type !== MOVE_ACTOR) return;
        const traps = getTraps(newState);
        const actor = getActorById(newState, { id: action.id });
        Object.values(traps).forEach((trap) => {
            if (positionsEqual(actor.position, trap.position)) {
                console.log(trapBehaviors, trap.data.behavior);
                trapBehaviors[trap.data.behavior]({ actor, store });
            }
        });
    });
};

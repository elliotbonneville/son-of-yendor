import requiredProp from '~/utils/requiredProp';

import { createSelector } from '~/model/utils';

import { getActors } from '~/model/features/actors/selectors';
import { getTraps } from './selectors';

import * as trapBehaviors from '~/model/data/traps/behaviors';

const getTrapsAndActors = createSelector(
    [getActors, getTraps],
    (actors, traps) => ({ actors, traps }),
);

export default ({
    store = requiredProp('store'),
}) => {
    const { actors, traps } = getTrapsAndActors(store.getState());

    Object.values(actors).forEach((actor) => {
        Object.values(traps).forEach((trap) => {
            const { x: actorX, y: actorY } = actor.position;
            const { x: trapX, y: trapY } = trap.position;
            // Traps shouldn't apply to dead actors!
            if (!actor.dead && actorX == trapX && actorY == trapY) {
                trapBehaviors[trap.type]({ actor, store });
            }
        });
    });
};

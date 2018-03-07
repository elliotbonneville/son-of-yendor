import requiredProp from '~/utils/requiredProp';

import { createSelector } from '~/model/utils';

import { getActors } from '~/model/features/actors/selectors';
import { getTraps } from './selectors';

import * as trapBehaviors from '~/model/data/traps/behaviors';

const getTrapsAndActors = createSelector(
    [getActors, getTraps],
    (actors, traps) => ({ actors, traps }),
);

export const traps = ({
    state = requiredProp('state'),
    dispatch = requiredProp('dispatch'),
}) => {
    const { actors, traps } = getTrapsAndActors(state);

    Object.values(actors).forEach((actor) => {
        Object.values(traps).forEach((trap) => {
            const { x: actorX, y: actorY } = actor.position;
            const { x: trapX, y: trapY } = trap.position;
            if (actorX == trapX && actorY == trapY) {
                trapBehaviors[trap.type]({ actor, dispatch });
            }
        });
    });
};

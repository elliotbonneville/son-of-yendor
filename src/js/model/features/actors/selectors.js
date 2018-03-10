import { createSelector } from '~/model/utils';

export const getActors = (state) => state.actors;

export const getActorsToKill = createSelector(
    [getActors],
    actors => Object.values(actors).filter(actor => actor.health <= 0),
);

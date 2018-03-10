import { createSelector } from '~/model/utils';

export const getActors = (state) => state.actors;

export const getActorsToKill = createSelector(
    [getActors],
    actors => Object.values(actors).filter(actor => actor.health <= 0),
);

export const getActorById = (state, { id }) => getActors(state)[id];

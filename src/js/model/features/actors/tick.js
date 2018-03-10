import { generate as generateId } from 'shortid';
import sample from 'lodash/sample';

import { treasureToActorsRatio } from '~/model/constants';

import requiredProp from '~/utils/requiredProp';

import { getActors } from '~/model/features/actors/selectors';
import { getTilesOfType } from '~/model/features/level/selectors';
import { getValueOfItemsOnFloor } from '~/model/features/items/selectors';

import killActor from '~/model/features/actors/killActor.action';
import createActor from '~/model/features/actors/createActor.action';
import log from '~/model/features/ui/messages/log.action';

import behaviors from '~/model/data/actors/behaviors';

export default ({
    store = requiredProp('store'),
}) => {
    const state = store.getState();

    // Bring new adventurers to the yard
    const stairs = Object.entries(getTilesOfType(state, { type: 'stairs' }));
    const treasure = getValueOfItemsOnFloor(state);
    const actorArriving = Math.random() < treasureToActorsRatio * treasure;
    if (stairs.length && actorArriving) {
        const [position] = sample(stairs);
        const [x, y] = position.split(',');
        store.dispatch(
            createActor({
                id: generateId(),
                actorType: 'adventurer',
                position: { x, y },
            }),
        );
        store.dispatch(
            log('An intrepid adventurer comes dashing right down your stairs!'),
        );
    }

    // Kill actors
    Object.values(getActors(state)).forEach((actor) => {
        if (!actor.dead) {
            behaviors[actor.type]({ actor, store }).forEach(store.dispatch);
        }
    });
};

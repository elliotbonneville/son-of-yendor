import requiredProp from '~/utils/requiredProp';

import { getActors } from '~/model/features/actors/selectors';
import actorTick from '~/model/features/actors/tick';

import killActor from '~/model/features/actors/killActor.action';

export default ({
    store = requiredProp('store'),
}) => {
    Object.values(getActors(store.getState())).forEach((actor) => {
        if (actor.health <= 0 && !actor.dead) {
            store.dispatch(killActor(actor));
        }

        actorTick({ actor, store });
    });
};

import { getActorById, getActorsToKill } from './selectors';

import { DAMAGE_ACTOR } from './types';

import placeItem from '~/model/features/items/placeItem.action';

import killActor from '~/model/features/actors/killActor.action';
import dropItem from '~/model/features/actors/dropItem.action';

import log from '~/model/features/ui/messages/log.action';

export default ({ store }) => {
    store.listen((newState, action) => {
        if (action.type === DAMAGE_ACTOR) {
            const state = store.getState();
            getActorsToKill(state).forEach((actor) => {
                actor.inventory.forEach(item => {
                    store.dispatch(dropItem({ item, id: actor.id }));
                    store.dispatch(placeItem({
                        id: item.id,
                        position: actor.position,
                    }));
                });

                store.dispatch(killActor(actor.id));
                store.dispatch(
                    log('The adventurer expires, dropping all his sweet swag.'),
                );
            });
        }
    });
};

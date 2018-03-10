import { getActorById, getActorsToKill } from './selectors';

import { ACTOR_LEAVE, DAMAGE_ACTOR } from './types';

import placeItem from '~/model/features/items/placeItem.action';

import killActor from '~/model/features/actors/killActor.action';
import dropItem from '~/model/features/actors/dropItem.action';

import lose from '~/model/features/status/lose.action';
import win from '~/model/features/status/win.action';

import setPaused from '~/model/features/time/setPaused.action';

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
                const killedRogue = actor.type === 'rogue';
                const message = (killedRogue)
                    ? 'The rogue hath been slain. Congrats, you beat the game!'
                    : 'The adventurer expires, dropping all his sweet swag.';
                store.dispatch(
                    log(message, killedRogue ? 'purple' : undefined),
                );
                if (killedRogue) setTimeout(
                    () => {
                        store.dispatch(win());
                        store.dispatch(setPaused(true));
                    },
                    2000,
                );
            });
        }

        if (action.type === ACTOR_LEAVE) {
            if (action.actor.type === 'rogue') {
                setTimeout(
                    () => {
                        store.dispatch(lose());
                        store.dispatch(setPaused(true));
                    },
                    2000,
                );
            }
        }
    });
};

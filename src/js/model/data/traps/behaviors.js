import takeDamage from '~/model/features/actors/takeDamage.action';
import log from '~/model/features/ui/messages/log.action';

export const pit = ({ actor, store }) => {
    if (Math.random() > actor.agility) {
        store.dispatch(log(`The ${actor.type} falls into a hidden pit!`));
        store.dispatch(takeDamage({ actor, damage: 5 }));
    } else {
        store.dispatch(log(`The ${actor.type} narrowly avoids a hidden pit!`));
    }
};

export const stoneBlock = ({ actor, store }) => {
    if (Math.random() + 0.2 > actor.agility) {
        store.dispatch(
            log(`A huge stone block drops on the ${actor.type}'s head!`),
        );
        store.dispatch(takeDamage({ actor, damage: 15 }));
    } else {
        store.dispatch(
            log(`The ${actor.type} barely avoids a huge stone block as it crashes down.`),
        );
    }
};

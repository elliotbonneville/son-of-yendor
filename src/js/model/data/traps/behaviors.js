import takeDamage from '~/model/features/actors/takeDamage.action';
import log from '~/model/features/ui/messages/log.action';

export const pit = ({ actor, store }) => {
    store.dispatch(log(`The ${actor.type} falls into a pit!`));
    store.dispatch(takeDamage({ actor, damage: 5 }));
};

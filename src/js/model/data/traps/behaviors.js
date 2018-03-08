import takeDamage from '~/model/features/actors/takeDamage.action';

export const pit = ({ actor, store }) => {
    store.dispatch(takeDamage({ actor, damage: 5 }));
};

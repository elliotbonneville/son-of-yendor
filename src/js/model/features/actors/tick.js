import behaviors from '~/model/data/actors/behaviors';

export default ({ actor, store }) => {
    if (actor.dead) return;
    store.dispatch(...behaviors[actor.type]({ actor, store }));
};

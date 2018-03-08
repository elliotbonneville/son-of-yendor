import behaviors from '~/model/data/actors/behaviors';

export default ({ actor, store }) => {
    if (actor.dead) return;
    behaviors[actor.type]({ actor, store }).forEach(store.dispatch);
};

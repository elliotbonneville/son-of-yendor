import behaviors from '~/model/data/actors/behaviors';

export default ({ actor, state, dispatch }) => {
    dispatch(...behaviors[actor.type]({ actor, state }));
};

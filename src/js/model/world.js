import requiredProp from '~/utils/requiredProp';

import actorTick from '~/model/features/actors/tick';
import { getActors } from '~/model/features/actors/selectors';

function tick({ state, dispatch }) {
    Object.entries(getActors(state)).forEach(
        ([,actor]) => actorTick({ actor, state, dispatch }),
    );
}

export default ({
    store = requiredProp('store')
}) => {
    let currentTime = store.getState().time;

    return {
        init: () => {
            store.listen((newState) => {
                const { time } = newState;
                if (time !== currentTime) {
                    currentTime = time;
                    tick({
                        state: newState,
                        dispatch: store.dispatch,
                    });
                }
            });
        },
    };
};

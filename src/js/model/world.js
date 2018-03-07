import requiredProp from '~/utils/requiredProp';

import actorTick from '~/model/features/actors/tick';
import { getActors } from '~/model/features/actors/selectors';
import { getTick } from '~/model/features/time/selectors';

import * as trapListeners from '~/model/features/traps/listeners';

function tick({ state, dispatch }) {
    Object.values(trapListeners).forEach(
        listener => listener({ state, dispatch }),
    );
    Object.values(getActors(state)).forEach(
        (actor) => actorTick({ actor, state, dispatch }),
    );
}

export default ({
    store = requiredProp('store')
}) => {
    let currentTick = getTick(store.getState());

    return {
        init: () => {
            store.listen((newState) => {
                const nextTick = getTick(newState);
                if (currentTick !== nextTick) {
                    currentTick = nextTick;
                    tick({
                        state: newState,
                        dispatch: store.dispatch,
                    });
                }
            });
        },
    };
};

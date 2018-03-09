import requiredProp from '~/utils/requiredProp';

import { getActors } from '~/model/features/actors/selectors';
import { getTick } from '~/model/features/time/selectors';

import trapListeners from '~/model/features/traps/listeners';
import actorListeners from '~/model/features/actors/listeners';
import itemListeners from '~/model/features/items/listeners';

const featureListeners = [actorListeners, itemListeners, trapListeners];

function tick({ store }) {
    featureListeners.forEach(
        featureListener => featureListener({ store }),
    );
}

export default ({
    store = requiredProp('store')
}) => {
    let currentTick = getTick(store.getState());

    return {
        init: () => {
            store.listen(() => {
                const nextTick = getTick(store.getState());
                if (currentTick !== nextTick) {
                    currentTick = nextTick;
                    tick({ store });
                }
            });
        },
    };
};

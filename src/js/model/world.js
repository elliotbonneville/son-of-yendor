import requiredProp from '~/utils/requiredProp';

import { getActors } from '~/model/features/actors/selectors';
import { getTick } from '~/model/features/time/selectors';

import tickActors from '~/model/features/actors/tick';
import tickStats from '~/model/features/stats/tick';
const tickers = [tickActors, tickStats];

import trapListeners from '~/model/features/traps/listeners';
import actorListeners from '~/model/features/actors/listeners';
import itemListeners from '~/model/features/items/listeners';

const featureListeners = [actorListeners, itemListeners, trapListeners];

function tick({ store }) {
    tickers.forEach(tick => tick({ store }));
}

export default ({
    store = requiredProp('store')
}) => {
    let currentTick = getTick(store.getState());
    return {
        init: () => {
            // Set up listeners for all features that need an ear to the ground
            featureListeners.forEach(
                featureListener => featureListener({ store }),
            );

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

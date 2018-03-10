import { getMana } from './selectors';
import { getValueOfItemsOnFloor } from '~/model/features/items/selectors';
import { getGameStatus } from '~/model/features/status/selectors';
import { getActors } from '~/model/features/actors/selectors';

import lose from '~/model/features/status/lose.action';

export default ({ store }) => {
    store.listen(() => {
        const state = store.getState();
        const gameStatus = getGameStatus(state);

        if (gameStatus !== 'playing') return;

        const manaRemaining = getMana(state);
        const treasureRemaining = getValueOfItemsOnFloor(state);
        const actors = getActors(state);

        // If there is no treasure left to generate power, and the total power
        // is less than the cheapest treasure, there is no way to get more,
        // so...  game ends because there's nothing the player can do anymore.
        if (
            treasureRemaining === 0 &&
            manaRemaining < 5 &&
            Object.values(actors).length === 0
        ) {
            setTimeout(() => {
                store.dispatch(
                    lose('You ran out of treasure and power... Game Over.'),
                );
            }, 2000);
        }
    });
};

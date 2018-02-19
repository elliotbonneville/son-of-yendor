import seedRandom from 'seedrandom';

import Rectangle from '~/utils/Rectangle';

import { MAP_WIDTH, MAP_HEIGHT } from '~/constants';

function createLevel(seed) {
    const rng = seedRandom(seed);
    const tiles = {};
    Rectangle(0, 0, MAP_WIDTH, MAP_HEIGHT).forEach(({ x, y }) => {
        tiles[`${x},${y}`] = rng() < 0.7 ? 'floor' : 'wall';
    });
    return tiles;
}

export default (state, { id, seed }) => ({
    ...state,
    [id]: {
        active: false,
        seed,
        tiles: createLevel(seed),
    },
});

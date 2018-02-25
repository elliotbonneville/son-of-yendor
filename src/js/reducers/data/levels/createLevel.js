import seedRandom from 'seedrandom';

import rectangle from '~/utils/rectangle';

import { MAP_WIDTH, MAP_HEIGHT } from '~/constants';

function createLevel(seed) {
    const rng = seedRandom(seed);
    return rectangle({ width: MAP_WIDTH, height: MAP_HEIGHT })
        .reduce(
            (tiles = {}, { x, y }) => Object.assign( 
                tiles,
                { [`${x},${y}`]: (rng() < 0.7) ? 'floor' : 'wall' },
            ),
        );
}

export default (state, { id, seed }) => ({
    ...state,
    [id]: {
        active: false,
        seed,
        tiles: createLevel(seed),
    },
});

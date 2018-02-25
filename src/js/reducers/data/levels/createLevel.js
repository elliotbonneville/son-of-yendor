import seedRandom from 'seedrandom';

import requiredProp from '~/utils/requiredProp';
import rectangle from '~/utils/rectangle';

import { MAP_WIDTH, MAP_HEIGHT } from '~/constants';

function createLevelFeature(featureGenerator) {
    return config => levelProperties => featureGenerator({
        ...config,
        ...levelProperties,
    });
}

const levelFeatures = {
    noise: createLevelFeature(
        ({
            bounds = requiredProp('bounds'),
            rng = requiredProp('rng'),
            level = {},

            noiseLevel = 0.7,
            noiseType = 'wall',
        }) => bounds.reduce(
            (tiles = level, { x, y }) => Object.assign( 
                tiles,
                (rng() < noiseLevel)
                    ? { [`${x},${y}`]: noiseType }
                    : {},
            ),
        ),
    ),
    walls: createLevelFeature(
        ({
            bounds = requiredProp('bounds'),
            rng = requiredProp('rng'),
            level = {},
        }) => bounds.reduce(
            (tiles = level, { x, y }) => Object.assign(
                tiles,
                (
                    x === bounds.left ||
                    y === bounds.top ||
                    x === bounds.right - 1||
                    y === bounds.bottom - 1
                )
                    ? { [`${x},${y}`]: 'wall' }
                    : {},
            ),
        ),
    ),
};

function createLevelFactory(...features) {
    return ({
        rng = requiredProp('rng'),
        bounds = requiredProp('bounds'),
    }) => features.reduce(
        (level = {}, feature) => feature({ rng, bounds, level }),
        {},
    );
}

const createDefaultDungeon = createLevelFactory(
    levelFeatures.noise({ noiseLevel: 0.4 }),
    levelFeatures.walls(),
);

function createLevel(seed) {
    const rng = seedRandom(seed);
    const bounds = rectangle({ width: MAP_WIDTH, height: MAP_HEIGHT });
    return createDefaultDungeon({ bounds, rng });
}

export default (state, { id, seed }) => ({
    ...state,
    [id]: {
        active: false,
        seed,
        tiles: createLevel(seed),
    },
});

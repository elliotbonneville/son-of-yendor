import tileDefinitions from '~/model/data/tiles';

import createLevelFeature from './createLevelFeature';

const createTile = tile => ({ ...tileDefinitions[tile] });

const levelFeatures = {
    fill: createLevelFeature(
        ({
            bounds = requiredProp('bounds'),
            rng = requiredProp('rng'),

            type = 'floor',
        }) => bounds.reduce(
            (tiles = {}, { x, y }) => Object.assign(
                tiles,
                { [`${x},${y}`]: createTile(type) },
            ),
        ),
    ),

    noise: createLevelFeature(
        ({
            bounds = requiredProp('bounds'),
            rng = requiredProp('rng'),
            level = {},

            noiseLevel = 0.7,
            type = 'wall',
        }) => bounds.reduce(
            (tiles = level, { x, y }) => Object.assign( 
                tiles,
                (rng() < noiseLevel)
                    ? { [`${x},${y}`]: createTile(type) }
                    : {},
            ),
        ),
    ),
    borders: createLevelFeature(
        ({
            bounds = requiredProp('bounds'),
            rng = requiredProp('rng'),
            level = {},

            type = 'wall',
        }) => bounds.reduce(
            (tiles = level, { x, y }) => Object.assign(
                tiles,
                (
                    x === bounds.left ||
                    y === bounds.top ||
                    x === bounds.right - 1||
                    y === bounds.bottom - 1
                )
                    ? { [`${x},${y}`]: createTile(type) }
                    : {},
            ),
        ),
    ),
};

export default levelFeatures;

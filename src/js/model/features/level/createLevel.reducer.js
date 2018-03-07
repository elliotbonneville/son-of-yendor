import seedRandom from 'seedrandom';

import requiredProp from '~/utils/requiredProp';
import rectangle from '~/utils/rectangle';

import { MAP_WIDTH, MAP_HEIGHT } from '~/constants';

import featureDefinitions from './featureDefinitions';
import levelDefinitions from '~/model/data/levels';

const storeNeighbors = featureDefinitions.storeNeighbors();

function createLevelFactory(...features) {
    return ({
        rng = requiredProp('rng'),
        bounds = requiredProp('bounds'),
    }) => [...features, storeNeighbors].reduce(
        (level = {}, feature) => feature({ rng, bounds, level }),
        {},
    );
}

const levelGenerators = Object.keys(levelDefinitions).reduce(
    (accumulator, definitionName) => {
        const definition = levelDefinitions[definitionName];
        const features = definition.map(
            ({ feature, properties }) =>
                featureDefinitions[feature](properties),
        );
        return Object.assign(
            accumulator,
            { [definitionName]: createLevelFactory(...features) },
        );
    },
    {},
);

function createLevel({ seed, levelType }) {
    return levelGenerators[levelType]({
        bounds: rectangle({ width: MAP_WIDTH, height: MAP_HEIGHT }),
        rng: seedRandom(seed),
    });
}

export default (state = {}, { id, seed, levelType }) => ({
    ...state,
    seed,
    tiles: createLevel({ seed, levelType }),
});

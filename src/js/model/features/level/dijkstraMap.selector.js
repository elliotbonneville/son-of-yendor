import { MAP_WIDTH, MAP_HEIGHT } from '~/constants';

import rectangle from '~/utils/rectangle';
import requiredProp from '~/utils/requiredProp';
import cellKey from '~/utils/cellKey';

import { createSelector } from '~/model/utils';

import {
    getTile,
    getTiles,
    getTileNeighbors,
} from '~/model/features/level/selectors';
import { getItemsWithValues } from '~/model/features/items/selectors';

const unassignedDistanceMap = rectangle({
    width: MAP_WIDTH,
    height: MAP_HEIGHT
}).reduce(
    (map, coords) => Object.assign( map, { [cellKey(coords)]: Infinity }),
    {},
);

const generateMap = ({
    state = requiredProp('state'),
    pointsOfInterest = requiredProp('pointsOfInterest'),
    maxInterest = requiredProp('maxInterest'),
    tiles = requiredProp('tiles'),
}) => {
    const startTime = Date.now();
    const combinedDistances = Object.assign({}, unassignedDistanceMap);
    const graphs = pointsOfInterest.map((point) => {
        const frontier = [point.position];
        const distance = { [point.position]: 0 };
        let current;
        let neighbors;    
        while (frontier.length) {
            current = frontier.shift();
            neighbors = getTileNeighbors(state, current);
            Object.keys(neighbors).forEach((position) => {
                if (typeof distance[position] === 'undefined') {
                    frontier.push(position);
                    distance[position] = distance[current] + 1;
                    combinedDistances[position] = tiles[position].data.walkable
                        ? Math.min(
                            combinedDistances[position],
                            distance[position],
                        )
                        : Infinity;
                }
            });
        }
    });

    if (game.debug) {
        const time = Date.now() - startTime;
        const points = pointsOfInterest.length;
        console.log(
            `Took ${time}ms to generate map with ${points} points of interest`,
        );
    }

    return combinedDistances;
};

const mapGenerators = {
    items: createSelector(
        [state => state, getTiles, getItemsWithValues],
        (state, tiles, itemsWithValues) => generateMap({
            pointsOfInterest: itemsWithValues.map(
                ({ position, value }) => ({
                    position: cellKey(position),
                    weight: value
                }),
            ),
            maxInterest: 10,
            state,
            tiles,
        }),
    ),
};

// generate a Dijkstra map based on criteria
export default ({ state, name }) => mapGenerators[name](state);

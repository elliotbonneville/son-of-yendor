import { MAP_WIDTH, MAP_HEIGHT } from '~/constants';

import rectangle from '~/utils/rectangle';
import requiredProp from '~/utils/requiredProp';
import cellKey from '~/utils/cellKey';

import { createSelector } from '~/model/utils';

import { getTiles } from '~/model/features/level/selectors';
import { getItems } from '~/model/features/items/selectors';

const unassignedDistanceMap = rectangle({
    width: MAP_WIDTH,
    height: MAP_HEIGHT
}).reduce(
    (map, coords) => Object.assign( map, { [cellKey(coords)]: Infinity }),
    {},
);

const generateMap = ({
    pointsOfInterest = requiredProp('pointsOfInterest'),
    tiles = requiredProp('tiles'),

    interestLevel = 0,
}) => {
    const startTime = Date.now();
    const combinedDistances = Object.assign({}, unassignedDistanceMap);
    const graphs = pointsOfInterest.map(({ position }) => {
        combinedDistances[position] = interestLevel;
        const frontier = [position];
        const distance = { [position]: interestLevel };
        let current;
        let neighbors;

        while (frontier.length) {
            current = frontier.shift();
            Object.keys(tiles[current].neighbors).forEach((neighbor) => {
                if (typeof distance[neighbor] === 'undefined') {
                    const { walkable } = tiles[neighbor].data;
                    if (walkable) frontier.push(neighbor);
                    distance[neighbor] = distance[current] + 1;
                    combinedDistances[neighbor] =
                        (walkable)
                            ? Math.min(
                                combinedDistances[neighbor],
                                distance[neighbor],
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
        [getTiles, getItems],
        (tiles, items) => generateMap({
            pointsOfInterest: Object.values(items).map(
                ({ position, data }) => ({
                    position: cellKey(position),
                    interestLevel: -data.value
                }),
            ),
            maxInterest: 10,
            tiles,
        }),
    ),
};

// generate a Dijkstra map based on criteria
export default ({ state, name }) => mapGenerators[name](state);

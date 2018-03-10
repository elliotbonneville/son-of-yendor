import sample from 'lodash/sample';

import getDijkstraMap, {
    generateMap,
    getUnassignedDistanceMap,
} from '~/model/features/level/dijkstraMap.selector';
import { getTile, getTiles } from '~/model/features/level/selectors';

export default ({ start, state, itinerary, goal }) => {
    const itemDistances = getDijkstraMap({ state, name: goal });
    const itineraryDistances = itinerary
        ? generateMap({ pointsOfInterest: itinerary, tiles: getTiles(state) })
        : getUnassignedDistanceMap(Infinity);

    const distances = Object.entries(itemDistances).reduce(
        (totalDistances, [position, distance]) => Object.assign(
            totalDistances,
            {
                [position]: Math.min(
                    itemDistances[position],
                    itineraryDistances[position]
                ),
            },
        ),
        {},
    );
    const neighbors = getTile(state, start).neighbors;
    const fastestRouteToWealth = Object.keys(neighbors).sort(
        (positionA, positionB) => {
            return distances[positionA] - distances[positionB];
        },
    );
    const cheapestStep = fastestRouteToWealth[0];
    console.log(itemDistances);
    const possibleSteps = fastestRouteToWealth.filter(
        step => {
            const [x, y] = step.split(',');
            return (
                getTile(state, { x, y }).data.walkable && 
                distances[step] === distances[cheapestStep]
            );
        }
    );
    const [x, y] = sample(possibleSteps).split(',');

    return { x, y };
};

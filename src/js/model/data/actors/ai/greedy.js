import sample from 'lodash/sample';

import getDijkstraMap from '~/model/features/level/dijkstraMap.selector';
import { getTile } from '~/model/features/level/selectors';

export default ({ start, state, goal }) => {
    const distances = getDijkstraMap({ state, name: goal });
    const neighbors = getTile(state, start).neighbors;
    const fastestRouteToWealth = Object.keys(neighbors).sort(
        (positionA, positionB) => {
            return distances[positionA] - distances[positionB];
        },
    );
    const cheapestStep = fastestRouteToWealth[0];
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

import cellKey from '~/utils/cellKey';

import getDijkstraMap from '~/model/features/level/dijkstraMap.selector';
import { getTileNeighbors } from '~/model/features/level/selectors';

export default ({ start, state }) => {
    const dijkstraMap = getDijkstraMap({ state, name: 'items' });
    const neighbors = getTileNeighbors(state, cellKey(start));
    const fastestRouteToWealth = Object.keys(neighbors).sort(
        (positionA, positionB) => {
            return dijkstraMap[positionA] - dijkstraMap[positionB];
        },
    );
    const [x, y] = fastestRouteToWealth[0].split(',');
    return { x, y };
};

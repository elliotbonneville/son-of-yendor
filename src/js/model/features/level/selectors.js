import cellKey from '~/utils/cellKey';
import { randomDirection } from '~/utils/math2';

import { createSelector } from '~/model/utils';

export function getLevel(state) {
    return state.level;
}

export function getTiles(state) {
    return getLevel(state).tiles;
}

export function getTile(state, coordinates) {
    return getTiles(state)[cellKey(coordinates)];
}

export function getRandomNeighbor(state, {
    position,
    criteria = () => true,
    maxAttempts = 12,
    attempt = 0,
}) {
    const { x: dx, y: dy } = randomDirection();
    const { x: cx, y: cy } = position;
    const x = cx + dx;
    const y = cy + dy;
    const tileAtNewPosition = getTile(state, { x, y });

    if (!criteria(tileAtNewPosition)) {
        if (attempt > maxAttempts) return { x: undefined, y: undefined };
        return getRandomNeighbor(
            state,
            {
                position,
                criteria,
                attempt: attempt + 1,
            },
        );
    }

    return { x, y };
}

export const getTileNeighbors = (state, coordinates) => {
    const [x, y] = coordinates.split(',').map(Number);
    const offsets = [
        [-1, -1],
        [0, -1],
        [1, -1],
        [-1, 0],
        [1, 0],
        [-1, 1],
        [0, 1],
        [1, 1],
    ];

    return offsets.reduce(
        (neighbors, [dx, dy]) => {
            const neighborCoords = {
                x: x + dx,
                y: y + dy,
            };

            const neighbor = getTile(state, neighborCoords);

            return (neighbor)
                ? Object.assign(
                    neighbors,
                    { [cellKey(neighborCoords)]: neighbor },
                )
                : neighbors;
        },
        {},
    );
};

export const getTilesAsTraversalGraph = createSelector(
    [state => state, getTiles],
    (state, tiles) => Object.entries(tiles).reduce(
        (graph, [coordinates, tile]) => Object.assign(
            graph,
            {
                [coordinates]: {
                    ...tile,
                    neighbors: getTileNeighbors(state, coordinates),
                },
            },
        ),
        {},
    ),
);

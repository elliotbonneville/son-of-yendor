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

export function getTilesOfType(state, { type }) {
    const tiles = getTiles(state);
    return Object.entries(tiles).reduce(
        (tilesOfType, [position, tile]) => {
            if (tile.type !== type) return tilesOfType;
            return Object.assign(tilesOfType, { [position]: tile });
        },
        {},
    );
}

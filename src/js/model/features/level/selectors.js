import cellKey from '~/utils/cellKey';
import { randomDirection } from '~/utils/math2';
import tileDefinitions from '~/model/data/tiles';

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
    const tileAtNewPosition = tileDefinitions[getTile(state, { x, y })];

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

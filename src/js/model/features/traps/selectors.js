import positionsEqual from '~/utils/positionsEqual';

import { createSelector } from '~/model/utils';

export function getTraps(state) {
    return state.traps;
}

export function getTrap(state, { id }) {
    return getTraps(state)[id];
}

export const getTrapsOnFloor = createSelector(
    [getTraps],
    (traps) => Object.entries(traps)
        .filter(([id, trap]) => trap.position)
        .reduce(
            (trapsOnFloor, [id, trap]) => Object.assign(
                trapsOnFloor,
                { [id]: trap },
            ),
            {},
        ),
);

export function getTrapsByPosition(state, { position }) {
    return Object.values(getTrapsOnFloor(state)).filter(
        item => positionsEqual(position, item.position)
    );
}

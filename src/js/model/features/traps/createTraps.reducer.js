import requiredProp from '~/utils/requiredProp';
import positionsEqual from '~/utils/positionsEqual';

import { getTraps } from '~/model/features/traps/selectors';

import trapDefinitions from '~/model/data/traps/definitions';

const createTrap = ({
    id = requiredProp('id'),
    trapType = requiredProp('trapType'),
    position = requiredProp('position'),
}) => {
    return {
        position,
        id,
        type: trapType,
        ...trapDefinitions[trapType],
    };
};

export default (existingTraps, { traps }) => {
    return Object.assign(
        {},
        existingTraps,
        ...traps.map(({ id, trapType, position }) => {
            const trapAlreadyPlaced = Object.values(existingTraps).some(
                trap => positionsEqual(trap.position, position),
            );

            return (trapAlreadyPlaced)
                ? {}
                : { [id]: createTrap({ id, trapType, position }) };
        }),
    );
}

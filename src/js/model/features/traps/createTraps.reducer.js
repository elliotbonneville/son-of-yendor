import requiredProp from '~/utils/requiredProp';

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

export default (state, { traps }) => Object.assign(
    {},
    state,
    ...traps.map(({ id, trapType, position }) => ({
        [id]: createTrap({ id, trapType, position })
    })),
);

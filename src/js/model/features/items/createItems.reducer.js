import requiredProp from '~/utils/requiredProp';

import itemDefinitions from '~/model/data/items/definitions';

const createItem = ({
    id = requiredProp('id'),
    itemType = requiredProp('itemType'),
    position = requiredProp('position'),
}) => {
    return {
        position,
        id,
        type: itemType,
        ...itemDefinitions[itemType],
    };
};

export default (state, { items }) => Object.assign(
    {},
    state,
    ...items.map(({ id, itemType, position }) => ({
        [id]: createItem({ id, itemType, position })
    })),
);

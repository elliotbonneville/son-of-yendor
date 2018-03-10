import { generate as generateId } from 'shortid';

import requiredProp from '~/utils/requiredProp';

import itemDefinitions from '~/model/data/items/definitions';

export default ({
    itemType = requiredProp('itemType'),

    position,
    id = generateId(),
}) => {
    return {
        position,
        id,
        type: itemType,
        ...itemDefinitions[itemType],
    };
};

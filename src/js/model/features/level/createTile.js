import requiredProp from '~/utils/requiredProp';

import tileDefinitions from '~/model/data/tiles';

export default ({
    type = requiredProp('type'),
    tile = {},
}) => Object.assign(
    {},
    tile,
    tileDefinitions[type],
    { type }
);

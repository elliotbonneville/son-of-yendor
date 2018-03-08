import requiredProp from '~/utils/requiredProp';

import actorDefinitions from '~/model/data/actors/definitions';

const createActor = ({
    actorType = requiredProp('actorType'),
    id,
    position = requiredProp('position'),
}) => ({
    ...actorDefinitions[actorType].data,
    id,
    position,
    type: actorType,
    dead: false,
    inventory: [],
});

export default (state, { id, actorType, position }) => ({
    ...state,
    [id]: createActor({ actorType, id, position }),
});

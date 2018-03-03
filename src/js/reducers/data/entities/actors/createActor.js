import requiredProp from '~/utils/requiredProp';

import actorDefinitions from '~/data/entities/actors/index';

function createActor({
    actorType = requiredProp('actorType'),
    position = requiredProp('position'),
}) {
    const data = actorDefinitions[actorType].data;
    return { ...data, type: actorType, position };
}

export default function(state, { id, actorType, position }) {
    return {
        ...state,
        [id]: createActor({ actorType, position }),
    };
};

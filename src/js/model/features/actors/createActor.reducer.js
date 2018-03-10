import requiredProp from '~/utils/requiredProp';

import actorDefinitions from '~/model/data/actors/definitions';

const createActor = ({
    actorType = requiredProp('actorType'),
    id,
    position = requiredProp('position'),
}) => {
    const { data } = actorDefinitions[actorType];
    return {
        ...data,
        id,
        position,
        type: actorType,
        inventory: [],
    }
};

export default (state, { id, actorType, position }) => ({
    ...state,
    [id]: createActor({ actorType, id, position }),
});

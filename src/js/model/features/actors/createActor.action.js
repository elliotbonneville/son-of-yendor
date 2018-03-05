import { CREATE_ACTOR } from './types';

export default ({ id, actorType, position }) => ({
    type: CREATE_ACTOR,
    actorType,
    id,
    position,
});

import { CREATE_ACTOR } from './types';

export default ({ id, actorType }) => ({
    type: CREATE_LEVEL,
    actorType,
    id,
});

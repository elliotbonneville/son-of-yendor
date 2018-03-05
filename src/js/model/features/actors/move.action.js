import { MOVE_ACTOR } from './types';

export default ({ id, position }) => ({
    type: MOVE_ACTOR,
    id,
    position,
});

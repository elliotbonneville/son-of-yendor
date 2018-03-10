import { REMOVE_ACTOR } from './types';

export default ({ id }) => ({
    type: REMOVE_ACTOR,
    id,
});

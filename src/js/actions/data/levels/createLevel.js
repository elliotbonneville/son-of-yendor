import { CREATE_LEVEL } from './types';

export default (id, seed) => ({
    type: CREATE_LEVEL,
    id,
    seed,
});

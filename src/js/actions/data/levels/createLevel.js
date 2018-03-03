import { CREATE_LEVEL } from './types';

export default ({ id, seed, levelType }) => ({
    type: CREATE_LEVEL,
    id,
    seed,
    levelType,
});

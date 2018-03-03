import { CREATE_LEVEL } from './types';

export default ({ seed, levelType }) => ({
    type: CREATE_LEVEL,
    seed,
    levelType,
});

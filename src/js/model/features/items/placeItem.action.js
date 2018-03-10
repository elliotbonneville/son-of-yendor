import { PLACE_ITEM } from './types';

export default ({ id, position }) => ({
    type: PLACE_ITEM,
    id,
    position,
});

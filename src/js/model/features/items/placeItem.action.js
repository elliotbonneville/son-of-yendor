import { PLACE_ITEM } from './types';

export default ({ itemId, position }) => ({
    type: PLACE_ITEM,
    itemId,
    position,
});

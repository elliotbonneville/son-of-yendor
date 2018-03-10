import { PICK_UP_ITEM } from './types';

export default ({ actorId, itemId }) => ({
    type: PICK_UP_ITEM,
    actorId,
    itemId,
});

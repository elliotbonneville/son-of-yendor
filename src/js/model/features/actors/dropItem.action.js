import { DROP_ITEM } from './types';

export default ({ itemId, actorId }) => ({
    type: DROP_ITEM,
    itemId,
    actorId,
});

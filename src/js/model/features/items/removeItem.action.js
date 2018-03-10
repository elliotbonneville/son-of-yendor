import { REMOVE_ITEM } from './types';

export default ({ itemId }) => ({
    type: REMOVE_ITEM,
    itemId,
});

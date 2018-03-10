import { DROP_ITEM } from './types';

export default ({ item, id }) => ({
    type: DROP_ITEM,
    item,
    id,
});

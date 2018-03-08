import { DROP_ITEM } from './types';

export default ({ item, actor }) => ({
    type: DROP_ITEM,
    item,
    actor,
});

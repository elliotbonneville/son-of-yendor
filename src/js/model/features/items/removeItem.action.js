import { REMOVE_ITEM } from './types';

export default ({ item }) => ({
    type: REMOVE_ITEM,
    item,
});

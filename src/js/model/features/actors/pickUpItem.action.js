import { PICK_UP_ITEM } from './types';

export default ({ actor, item }) => ({
    type: PICK_UP_ITEM,
    actor,
    item,
});

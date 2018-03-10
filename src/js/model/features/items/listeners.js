import { PICK_UP_ITEM } from '~/model/features/actors/types';

import removeItem from '~/model/features/items/removeItem.action';

export default ({ store }) => {
    store.listen((newState, action) => {
        if (action.type === PICK_UP_ITEM) {
            store.dispatch(removeItem({ itemId: action.itemId }));
        }
    });
};

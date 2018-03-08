import * as itemActionTypes from './types';
import { PICK_UP_ITEM, DROP_ITEM } from '~/model/features/actors/types';

import removeItem from '~/model/features/items/removeItem.action';

export default store => next => action => {
    if (action.type === PICK_UP_ITEM) {
        store.dispatch(removeItem({ item: action.item }));
    }

    return next(action);
};

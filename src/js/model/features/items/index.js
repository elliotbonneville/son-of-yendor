import { createReducer } from '~/model/utils';

import createItems from './createItems.reducer';
import removeItem from './removeItem.reducer';
import placeItem from './placeItem.reducer';

import { CREATE_ITEMS, REMOVE_ITEM, PLACE_ITEM } from './types';

export default createReducer(
    {},
    {
        [CREATE_ITEMS]: createItems,
        [REMOVE_ITEM]: removeItem,
        [PLACE_ITEM]: placeItem,
    },
);

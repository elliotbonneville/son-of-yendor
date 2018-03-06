import { createReducer } from '~/model/utils';

import createItems from '~/model/features/items/createItems.reducer';

import { CREATE_ITEMS } from './types';

export default createReducer(
    {},
    {
        [CREATE_ITEMS]: createItems,
    },
);

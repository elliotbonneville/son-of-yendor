import { createReducer } from '~/reducers/utils';

import createItem from './createItem';

export default createReducer(
    {},
    {
        CREATE_ITEM: createItem,
    },
);

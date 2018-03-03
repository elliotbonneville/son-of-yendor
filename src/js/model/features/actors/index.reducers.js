import { createReducer } from '~/reducers/utils';

import createActor from './createActor';

export default createReducer(
    {},
    {
        CREATE_ACTOR: createActor,
    },
);

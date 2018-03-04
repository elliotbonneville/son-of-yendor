import { createReducer } from '~/model/utils';

import { reducers as mouseReducers } from './mouse';
import { defaultMode, reducers as modeReducers } from './mode';

export default createReducer(
    {
        mouseDown: false,
        mousePosition: null,
        mouseDownPosition: null,
        mode: defaultMode,
    },
    { ...mouseReducers, ...modeReducers },
);

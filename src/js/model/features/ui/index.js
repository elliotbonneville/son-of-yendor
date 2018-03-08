import { createReducer } from '~/model/utils';

import { reducers as mouseReducers } from './mouse';
import { defaultMode, reducers as modeReducers } from './mode';
import { defaultMessages, reducers as messagesReducers } from './messages';

export default createReducer(
    {
        mouseDown: false,
        mousePosition: null,
        mouseDownPosition: null,
        mode: defaultMode,
        messages: defaultMessages,
    },
    { ...mouseReducers, ...modeReducers, ...messagesReducers },
);

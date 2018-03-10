import logReducer from './log.reducer';
import logAction from './log.action';

import { LOG } from './types';

export const actions = { log: logAction };

export const reducers = {
    [LOG]: logReducer,
};

export * as selectors from './selectors';

export const defaultMessages = [
    {
        text: 'You suddenly become self-aware.',
        color: 'purple',
    },
    {
        text: 'Create some stairs and some treasure to get going!',
        color: 'white',
    },
];

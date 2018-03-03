import { combineReducers } from '~/model/utils';
import { reducers } from '~/model/features';

export const rootReducer = combineReducers(reducers);

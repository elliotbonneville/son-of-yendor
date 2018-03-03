import { combineReducers } from '~/reducers/utils';

import items from './items';
import actors from './actors';

export default combineReducers({ items, actors });

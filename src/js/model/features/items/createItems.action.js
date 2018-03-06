import { CREATE_ITEMS } from './types';

export default (items) => ({
    type: CREATE_ITEMS,
    items,
});

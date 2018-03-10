import { LOG } from './types';

export default (message, color) => ({ type: LOG, message, color });

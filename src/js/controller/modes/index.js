import modeTypes from './modeTypes';

import items from './items';
import traps from './traps';
import tiles from './tiles';

export default {
    title: 'Menu',
    mode: modeTypes.DEFAULT,
    children: [tiles, traps, items],
    keyboardEvents: [],
    mouseEvents: [],
};

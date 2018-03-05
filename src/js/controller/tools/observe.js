import toolTypes from '~/controller/tools/toolTypes';

import * as items from './items';
import * as traps from './traps';
import * as tiles from './tiles';

export const menu = {
    title: 'Menu',
    mode: toolTypes.OBSERVE,
    children: [tiles.menu, traps.menu, items.menu],
};

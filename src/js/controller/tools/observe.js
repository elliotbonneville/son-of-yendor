import toolTypes from '~/controller/tools/toolTypes';

import * as items from './items';
import * as traps from './traps';
import * as tiles from './tiles';
import * as absorb from './absorb';

const children = [absorb.menu, tiles.menu, traps.menu, items.menu];
export const menu = {
    title: 'Menu',
    mode: toolTypes.OBSERVE,
    getChildren: () => children,
};

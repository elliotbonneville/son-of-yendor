import toolTypes from '~/controller/tools/toolTypes';

import * as items from './items';
import * as traps from './traps';
import * as tiles from './tiles';
import * as observe from './observe';
import * as absorb from './absorb';

const toolData = {
    [toolTypes.OBSERVE]: observe,
    [toolTypes.ABSORB]: absorb,
    [toolTypes.ITEM]: items,
    [toolTypes.TRAP]: traps,
    [toolTypes.TILE]: tiles,
}

export default toolData;

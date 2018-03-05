import toolTypes from '~/controller/tools/toolTypes';

import * as items from './items';
import * as traps from './traps';
import * as tiles from './tiles';
import * as observe from './observe';

const toolData = {
    [toolTypes.ITEM]: items,
    [toolTypes.TRAP]: traps,
    [toolTypes.TILE]: tiles,
    [toolTypes.OBSERVE]: observe,
}

export default toolData;

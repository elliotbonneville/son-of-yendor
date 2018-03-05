import modeTypes from '~/controller/modes/modeTypes';

import tileTypes from '~/model/data/tiles';

export default {
    title: 'Tiles',
    mode: modeTypes.TILE,
    children: Object.entries(tileTypes).map(([name, data]) => ({
        title: name,
        mode: name,
    })),
}

import rectangle from '~/utils/rectangle'

import toolTypes from '~/controller/tools/toolTypes';

import tileTypes from '~/model/data/tiles';

import setTiles from '~/model/features/level/setTiles.action';
import { selectors as mouseSelectors } from '~/model/features/ui/mouse';
import { selectors as modeSelectors } from '~/model/features/ui/mode';

export const menu = {
    title: 'Tiles',
    mode: toolTypes.TILE,
    children: Object.entries(tileTypes).map(([name, data]) => ({
        title: name,
        mode: name,
    })),
}

export const mouseListeners = {
    mouseup: [
        ({ store, location }) => {
            const state = store.getState();
            const selectionBounds = rectangle(
                mouseSelectors.selectionBounds(state),
            );
            const tileType = modeSelectors.getMode(state)[0];
            const newTiles = selectionBounds.reduce(
                (cells, { x, y }) => Object.assign(
                    cells,
                    { [`${x},${y}`]: tileType },
                ),
                {},
            );
            store.dispatch(setTiles(newTiles));
        },
    ],
};

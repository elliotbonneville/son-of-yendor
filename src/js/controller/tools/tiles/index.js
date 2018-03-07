import cellKey from '~/utils/cellKey';
import rectangle from '~/utils/rectangle'

import toolTypes from '~/controller/tools/toolTypes';

import createTile from '~/model/features/level/createTile';
import setTiles from '~/model/features/level/setTiles.action';
import { getTile } from '~/model/features/level/selectors';

import { selectors as mouseSelectors } from '~/model/features/ui/mouse';
import { selectors as modeSelectors } from '~/model/features/ui/mode';

import tileTypes from '~/model/data/tiles';

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
            const type = modeSelectors.getMode(state)[0];
            const newTiles = selectionBounds.reduce(
                (cells, coords) => {
                    const key = cellKey(coords);
                    return Object.assign(
                        cells,
                        {
                            [key]: createTile({
                                tile: getTile(state, coords),
                                type,
                            }),
                        },
                    );
                },
                {},
            );
            store.dispatch(setTiles(newTiles));
        },
    ],
};

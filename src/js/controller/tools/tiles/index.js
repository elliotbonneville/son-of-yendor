import cellKey from '~/utils/cellKey';
import rectangle from '~/utils/rectangle'

import toolTypes from '~/controller/tools/toolTypes';

import createTile from '~/model/features/level/createTile';
import setTiles from '~/model/features/level/setTiles.action';
import log from '~/model/features/ui/messages/log.action';
import { getTile } from '~/model/features/level/selectors';

import { selectors as mouseSelectors } from '~/model/features/ui/mouse';
import { selectors as modeSelectors } from '~/model/features/ui/mode';

import tileTypes from '~/model/data/tiles';

const children = Object.entries(tileTypes).map(([name, data]) => ({
    title: name,
    mode: name,
}));

export const menu = {
    title: 'Tiles',
    mode: toolTypes.TILE,
    getChildren: () => children,
}

export const mouseListeners = {
    mouseup: [
        ({ store, location }) => {
            const state = store.getState();
            const selectionBounds = rectangle(
                mouseSelectors.getSelectionBounds(state),
            );
            const mode = modeSelectors.getMode(state);
            if (mode.length !== 2) return;
            const type = mode[0];
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
            store.dispatch(log(`You place some ${type}.`));
            store.dispatch(setTiles(newTiles));
        },
    ],
};

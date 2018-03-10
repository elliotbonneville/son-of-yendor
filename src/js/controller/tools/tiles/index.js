import cellKey from '~/utils/cellKey';
import rectangle from '~/utils/rectangle'

import toolTypes from '~/controller/tools/toolTypes';

import createTile from '~/model/features/level/createTile';
import setTiles from '~/model/features/level/setTiles.action';
import modifyMana from '~/model/features/stats/modifyMana.action';

import log from '~/model/features/ui/messages/log.action';
import { getTile } from '~/model/features/level/selectors';
import { getMana } from '~/model/features/stats/selectors';

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

            const totalCost = Object.values(newTiles).reduce(
                (acc, { data }) => acc + data.cost,
                0,
            );
            const remainingMana = getMana(state);

            if (totalCost <= remainingMana) {
                store.dispatch(setTiles(newTiles));
                store.dispatch(modifyMana(-totalCost));
                store.dispatch(
                    log(`You materialize some ${type}. You feel weaker... [-${totalCost} power]`),
                );
            } else {
                store.dispatch(
                    log(`You try to materialize some ${type}, but don't have the power...`),
                );
            }
        },
    ],
};

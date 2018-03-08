import { generate as generateId } from 'shortid';

import rectangle from '~/utils/rectangle';

import toolTypes from '~/controller/tools/toolTypes';

import { selectors as mouseSelectors } from '~/model/features/ui/mouse';
import { selectors as modeSelectors } from '~/model/features/ui/mode';

import createItems from '~/model/features/items/createItems.action';

import itemDefinitions from '~/model/data/items/definitions';

export const menu = {
    title: 'Items',
    mode: toolTypes.ITEM,
    children: Object.keys(itemDefinitions).map(name => ({
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
            const itemType = modeSelectors.getMode(state)[0];

            const items = selectionBounds.reduce(
                (actions, position) => [
                    ...actions,
                    { id: generateId(), position, itemType },
                ],
                [],
            );
            store.dispatch(createItems(items));
        },
    ],
};

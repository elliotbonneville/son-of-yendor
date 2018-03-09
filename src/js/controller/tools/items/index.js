import { generate as generateId } from 'shortid';

import rectangle from '~/utils/rectangle';

import toolTypes from '~/controller/tools/toolTypes';

import { selectors as mouseSelectors } from '~/model/features/ui/mouse';
import { selectors as modeSelectors } from '~/model/features/ui/mode';

import log from '~/model/features/ui/messages/log.action';

import createItems from '~/model/features/items/createItems.action';

import itemDefinitions from '~/model/data/items/definitions';

const children = Object.keys(itemDefinitions).map(name => ({
    title: name,
    mode: name,
}));

export const menu = {
    title: 'Items',
    mode: toolTypes.ITEM,
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
            const itemType = mode[0];

            const items = selectionBounds.reduce(
                (actions, position) => [
                    ...actions,
                    { id: generateId(), position, itemType },
                ],
                [],
            );
            const { metadata } = itemDefinitions[itemType];
            const name = items.length > 1 ? metadata.plural : metadata.singular;
            store.dispatch(log(`You place ${items.length} ${name}.`));
            store.dispatch(createItems(items));
        },
    ],
};

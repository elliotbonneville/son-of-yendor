import { generate as generateId } from 'shortid';

import rectangle from '~/utils/rectangle';

import toolTypes from '~/controller/tools/toolTypes';

import { selectors as mouseSelectors } from '~/model/features/ui/mouse';
import { selectors as modeSelectors } from '~/model/features/ui/mode';
import { getTotalValue } from '~/model/features/items/selectors';
import { getMana } from '~/model/features/stats/selectors';

import log from '~/model/features/ui/messages/log.action';

import createItems from '~/model/features/items/createItems.action';
import modifyMana from '~/model/features/stats/modifyMana.action';

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

            const itemCreationData = selectionBounds.reduce(
                (actions, position) => [
                    ...actions,
                    { id: generateId(), position, itemType },
                ],
                [],
            );
            const { metadata } = itemDefinitions[itemType];
            const name = itemCreationData.length > 1
                ? metadata.plural
                : metadata.singular;

            const amount = itemCreationData.length;
            const value = itemCreationData.reduce(
                (acc, { itemType }) => (
                    acc + itemDefinitions[itemType].data.value
                ),
                0,
            );
            const manaRemaining = getMana(state);
            if (value < manaRemaining) {
                store.dispatch(
                    log(`You materialize ${amount} ${name}. You feel weaker... [-${value} power]`),
                );
                store.dispatch(createItems(itemCreationData));
                store.dispatch(modifyMana(-value));
            } else {
                store.dispatch(
                    log(`You try to materialize ${amount} ${name}, but don't have the power...`),
                );
            }
        },
    ],
};

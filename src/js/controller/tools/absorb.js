import rectangle from '~/utils/rectangle';

import { ABSORB } from '~/controller/tools/toolTypes';

import { getSelectionBounds } from '~/model/features/ui/mouse/selectors';
import { getItemsByPosition } from '~/model/features/items/selectors';
import { getTrapsByPosition } from '~/model/features/traps/selectors';

import removeItem from '~/model/features/items/removeItem.action';
import removeTrap from '~/model/features/traps/removeTrap.action';

export const menu = {
    title: 'Remove',
    mode: ABSORB,
    getChildren: (store) => {
        const state = store.getState();
        const selectionBounds = rectangle(getSelectionBounds(state, false));
        const items = [];
        const traps = [];

        selectionBounds.forEach((position) => {
            items.push(...getItemsByPosition(state, { position }));
            traps.push(...getTrapsByPosition(state, { position }));
        });

        if (!items.length && !traps.length) return [{ title: 'Click a tile' }];

        return [
            ...items.map((item, i) => ({
                title: `${i + 1}. ${item.type}`,
                callback: () => store.dispatch(removeItem({ itemId: item.id })),
            })),
            ...traps.map((trap, i) => ({
                title: `${i + 1 + items.length}. ${trap.type} trap`,
                callback: () => store.dispatch(removeTrap({ trap })),
            })),
        ];
    },
};

export const mouseEvents = {};

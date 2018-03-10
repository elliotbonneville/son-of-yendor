import { generate as generateId } from 'shortid';

import rectangle from '~/utils/rectangle';

import toolTypes from '~/controller/tools/toolTypes';

import { selectors as mouseSelectors } from '~/model/features/ui/mouse';
import { selectors as modeSelectors } from '~/model/features/ui/mode';
import { getMana } from '~/model/features/stats/selectors';

import log from '~/model/features/ui/messages/log.action';

import createTraps from '~/model/features/traps/createTraps.action';
import modifyMana from '~/model/features/stats/modifyMana.action';

import trapDefinitions from '~/model/data/traps/definitions';

const children = Object.keys(trapDefinitions).map(name => ({
    title: name,
    mode: name,
}));

export const menu = {
    title: 'Traps',
    mode: toolTypes.TRAP,
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
            const trapType = mode[0];

            const traps = selectionBounds.reduce(
                (actions, position) => [
                    ...actions,
                    { id: generateId(), position, trapType },
                ],
                [],
            );

            const placedMultiple = traps.length > 1;
            const totalCost = traps.reduce(
                (acc, { trapType }) => (
                    acc + trapDefinitions[trapType].data.value
                ),
                0,
            );
            const manaRemaining = getMana(state);
            const actionDescriptor = `materialize ${traps.length} ${trapType}`;

            if (totalCost <= manaRemaining) {
                store.dispatch(
                    log(
                        placedMultiple
                            ? `You ${actionDescriptor} traps. You feel weaker... [-${totalCost} power]`
                            : `You ${actionDescriptor} trap. You feel weaker... [-${totalCost} power]`,
                    ),
                );
                store.dispatch(createTraps(traps));
                store.dispatch(modifyMana(-totalCost));
            } else {
                store.dispatch(
                    log(
                        placedMultiple
                            ? `You try to ${actionDescriptor} traps, but don't have the power.`
                            : `You try to ${actionDescriptor} trap, but don't have the power.`,
                    ),
                );
            }
        },
    ],
};

import { generate as generateId } from 'shortid';

import rectangle from '~/utils/rectangle';

import toolTypes from '~/controller/tools/toolTypes';

import { selectors as mouseSelectors } from '~/model/features/ui/mouse';
import { selectors as modeSelectors } from '~/model/features/ui/mode';

import log from '~/model/features/ui/messages/log.action';

import createTraps from '~/model/features/traps/createTraps.action';
import trapDefinitions from '~/model/data/traps/definitions';

export const menu = {
    title: 'Traps',
    mode: toolTypes.TRAP,
    children: Object.keys(trapDefinitions).map(name => ({
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

            store.dispatch(
                log(
                    placedMultiple
                        ? `You place ${traps.length} ${trapType} traps.`
                        : `You place a ${trapType} trap.`,
                ),
            );
            store.dispatch(createTraps(traps));
        },
    ],
};;

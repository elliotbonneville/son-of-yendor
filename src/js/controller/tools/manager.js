import requiredProp from '~/utils/requiredProp';

import types from './toolTypes';
import { mouseEvents as tileMouseEvents } from './tiles';

import { selectors as modeSelectors } from '~/model/features/ui/mode';

const toolMouseEvents = {
    [types.TILE]: tileMouseEvents,
};

function activateTool({
    store = requiredProp('store'),
    tool = requiredProp('tool'),
}) {
    const mouseEvents = toolMouseEvents[tool];
    store.listen(() => {

    });
}

export default function ({
    store = requiredProp('store'),
    keyboard = requiredProp('keyboard'),
    mouse = requiredProp('mouse'),
}) {
    let currentTool = undefined;

    return {
        init: () => {
            store.listen((state) => {
                // Get last mode, which will be the highest level one, aka the
                // tool we are currently using
                const newTool = [...modeSelectors.getMode(state)].reverse()[0];

                // If there is no new tool, we've gone into default mode, so we
                // need to disable all current toolsj
                if (!newTool) {
                    // TODO: Disable tool
                    return;
                }

                // Activate the new tool
                if (newTool !== currentTool) {
                    currentTool = newTool;
                    activateTool({ store, tool: newTool });
                }
            });
        }
    };
};

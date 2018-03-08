import greedy from './ai/greedy';

import { getItemsByPosition } from '~/model/features/items/selectors';

import log from '~/model/features/ui/messages/log.action';
import move from '~/model/features/actors/move.action';
import pickUpItem from '~/model/features/actors/pickUpItem.action';

const adventurer = ({ actor, store }) => {
    const state = store.getState();

    // If we are standing on an item, pick it up and don't try to move
    const items = getItemsByPosition(state, { position: actor.position });
    if (items.length) return [
        pickUpItem({ actor, item: items[0] }),
        log(`The ${actor.type} picks up 1 ${items[0].type}`),
    ];

    // Otherwise, let's move towards the next item
    return [
        move({
            id: actor.id,
            position: greedy({
                state,
                start: actor.position,
            }),
        }),
    ];
}

export default { adventurer };

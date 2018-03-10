import cellKey from '~/utils/cellKey';
import chebyshevDistance from '~/utils/chebyshevDistance';

import greedy from './ai/greedy';

import { getItemsByPosition } from '~/model/features/items/selectors';
import { getTile } from '~/model/features/level/selectors';

import log from '~/model/features/ui/messages/log.action';
import move from '~/model/features/actors/move.action';
import leave from '~/model/features/actors/leave.action';
import markItinerary from '~/model/features/actors/markItinerary.action';
import pickUpItem from '~/model/features/actors/pickUpItem.action';

const adventurer = ({ actor, store }) => {
    const state = store.getState();

    // Mark itinerary if actor is at a location he's been wanting to go
    actor.itinerary.forEach(destination => {
        const [x, y] = destination.position.split(',');
        const distance = chebyshevDistance(actor.position, { x, y });
        if (distance < 3) {
            store.dispatch(
                markItinerary({
                    actorId: actor.id,
                    position: destination.position,
                }),
            );
        }
    });

    // If he has some loot he's going to make a run for it
    // TODO: only run when adventurer has an ROI over a certain %
    if (actor.inventory.length > 2) {
        const leaveMessage = actor.type === 'rogue'
            ? 'The rogue makes good on his escape... you have failed! Game Over.'
            : 'An adventurer waltzes off with some of your treasure!'
        if (getTile(state, actor.position).type === 'stairs') {
            return [
                leave(actor),
                log(leaveMessage),
            ];
        }

        return [
            move({
                id: actor.id,
                position: greedy({
                    state,
                    start: actor.position,
                    goal: 'stairs',
                }),
            }),
        ];
    }

    // If we are standing on an item, pick it up and don't try to move
    const items = getItemsByPosition(state, { position: actor.position });
    if (items.length) return [
        pickUpItem({ actorId: actor.id, itemId: items[0].id }),
        log(`The ${actor.type} picks up 1 ${items[0].type}.`),
    ];

    // Otherwise, let's move towards the next item
    return [
        move({
            id: actor.id,
            position: greedy({
                state,
                start: actor.position,
                itinerary: actor.itinerary || [],
                goal: 'items',
            }),
        }),
    ];
}

const rogue = adventurer;

export default { adventurer, rogue };

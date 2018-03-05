import { getRandomNeighbor } from '~/model/features/level/selectors';

import move from '~/model/features/actors/move.action';

const adventurer = ({ actor, state }) => {
    return [
        move({
            id: actor.id,
            position: getRandomNeighbor(
                state,
                {
                    position: actor.position,
                    criteria: tile => tile.walkable,
                },
            )
        }),
    ];
}

export default { adventurer };

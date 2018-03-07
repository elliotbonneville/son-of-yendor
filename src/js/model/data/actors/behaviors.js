import greedy from './ai/greedy';

import move from '~/model/features/actors/move.action';

const adventurer = ({ actor, state }) => {
    return [
        move({
            id: actor.id,
            position: greedy({ state, start: actor.position }),
        }),
    ];
}

export default { adventurer };

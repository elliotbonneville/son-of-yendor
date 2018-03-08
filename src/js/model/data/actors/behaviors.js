import greedy from './ai/greedy';

import move from '~/model/features/actors/move.action';

const adventurer = ({ actor, store }) => {
    return [
        move({
            id: actor.id,
            position: greedy({
                state: store.getState(),
                start: actor.position,
            }),
        }),
    ];
}

export default { adventurer };

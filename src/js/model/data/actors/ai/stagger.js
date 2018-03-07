import { getRandomNeighbor } from '~/model/features/level/selectors';

export default ({ start, state }) => getRandomNeighbor(
    state,
    {
        position: start,
        criteria: tile => tile.data.walkable,
    },
);

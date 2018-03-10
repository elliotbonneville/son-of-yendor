import { GAME_WIDTH, GAME_HEIGHT } from '~/constants';

import cellKey from '~/utils/cellKey';
import rectangle from '~/utils/rectangle';

import Cell from '~/view/Cell';

const plainScreen = rectangle({ width: GAME_WIDTH, height: GAME_HEIGHT })
    .reduce(
        (cells, { x, y }) => Object.assign(
            cells,
            {
                [cellKey({ x, y })]: new Cell({
                    character: ' ',
                }),
            }
        ),
        {},
    );

export default () => Object.assign({}, plainScreen);

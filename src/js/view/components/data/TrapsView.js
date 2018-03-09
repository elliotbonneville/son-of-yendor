import cellKey from '~/utils/cellKey';

import DataView from '~/view/components/data/DataView';
import Cell from '~/view/Cell';

import { getTrapsOnFloor } from '~/model/features/traps/selectors';

export default () => DataView({
    selectStateData: newState => getTrapsOnFloor(newState),
    renderData: traps => Object.entries(traps).reduce(
        (cells, [id, trap]) => Object.assign(
            cells, 
            {
                [cellKey(trap.position)]: new Cell(trap.appearance)
            },
        ),
        {},
    ),
});

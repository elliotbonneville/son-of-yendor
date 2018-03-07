import DataView from '~/view/components/data/DataView';
import Cell from '~/view/Cell';

import { getLevel } from '~/model/features/level/selectors';

export default () => DataView({
    selectStateData: newState => getLevel(newState).tiles,
    renderData: tiles => Object.entries(tiles).reduce(
        (cells, [coordinates, tile]) => Object.assign(
            cells, 
            { [coordinates]: new Cell(tile.appearance) },
        ),
        {},
    ),
});

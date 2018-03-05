import DataView from '~/view/components/data/DataView';
import Cell from '~/view/Cell';

import { getLevel } from '~/model/features/level/selectors';

import tileData from '~/model/data/tiles';

export default () => DataView({
    selectStateData: newState => getLevel(newState).tiles,
    renderData: data => Object.entries(data).reduce(
        (cells, [coordinates, cell]) => Object.assign(
            cells, 
            { [coordinates]: new Cell(tileData[cell].appearance) },
        ),
        {},
    ),
});

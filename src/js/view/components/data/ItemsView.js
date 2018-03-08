import cellKey from '~/utils/cellKey';

import DataView from '~/view/components/data/DataView';
import Cell from '~/view/Cell';

import { getItemsOnFloor } from '~/model/features/items/selectors';

import itemDefinitions from '~/model/data/items/definitions';

export default () => DataView({
    selectStateData: newState => getItemsOnFloor(newState),
    renderData: items => Object.entries(items).reduce(
        (cells, [id, item]) => Object.assign(
            cells, 
            {
                [cellKey(item.position)]: new Cell(
                    itemDefinitions[item.type].appearance,
                )
            },
        ),
        {},
    ),
});

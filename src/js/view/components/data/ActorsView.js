import cellKey from '~/utils/cellKey';

import DataView from '~/view/components/data/DataView';
import Cell from '~/view/Cell';

import { getActors } from '~/model/features/actors/selectors';

import actorData from '~/model/data/actors/definitions';

export default () => DataView({
    selectStateData: newState => getActors(newState),
    renderData: actors => Object.entries(actors).reduce(
        (cells, [id, actor]) => Object.assign(
            cells, 
            {
                [cellKey(actor.position)]: new Cell(
                    actorData[actor.type].appearance,
                )
            },
        ),
        {},
    ),
});

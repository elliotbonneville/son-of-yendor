import cellKey from '~/utils/cellKey';

import DataView from '~/view/components/data/DataView';
import Cell from '~/view/Cell';

import actorData from '~/model/data/actors/definitions';

import { getActors } from '~/model/features/actors/selectors';

export default () => DataView({
    selectStateData: newState => getActors(newState),
    renderData: actors => {
        return Object.entries(actors).reduce(
            (cells, [id, actor]) => {
                const {
                    foregroundColor,
                    backgroundColor,
                    body,
                } = actorData[actor.type].appearance;
                return Object.assign(
                    cells, 
                    {
                        [cellKey(actor.position)]: new Cell({
                            foregroundColor,
                            backgroundColor,
                            character: body
                        }),
                    },
                );
            },
            {},
        );
    },
});

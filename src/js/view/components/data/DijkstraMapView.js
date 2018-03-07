import DataView from '~/view/components/data/DataView';
import Cell from '~/view/Cell';

import dijkstraMap from '~/model/features/level/dijkstraMap.selector';

const valueColors = [
    'E50500',
    'CE0A13',
    'B71026',
    'A01639',
    '891C4C',
    '72225F',
    '5B2772',
    '442D85',
    '2D3398',
    '1639AB',
    '003FBF',
];

export default () => DataView({
    selectStateData: state => (game.debug)
        ? dijkstraMap({ state, name: 'items' })
        : {},
    renderData: values => Object.entries(values).reduce(
        (cells, [coordinates, value]) => {
            if (value === Infinity) return cells;
            const shortValue = (value > 9) ? 9 : value;
            return Object.assign(
                cells, 
                {
                    [coordinates]: new Cell({
                        character: shortValue,
                        backgroundColor: valueColors[shortValue],
                    })
                },
            );
        },
        {},
    ),
});

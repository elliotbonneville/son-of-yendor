import requiredProp from '~/utils/requiredProp';

import Cell from '~/view/Cell';

export default function ({
    text = requiredProp('text'),

    x = 0,
    y = 0,
    backgroundColor = 'black',
    foregroundColor = 'white',
}) {
    const cells = {};
    [...text].forEach((character, i) => {
        cells[`${x + i},${y}`] = new Cell({
            character,
            foregroundColor,
            backgroundColor,
        });
    });

    return cells;
}

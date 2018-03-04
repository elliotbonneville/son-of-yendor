import requiredProp from '~/utils/requiredProp';

export default function ({
    x = requiredProp('x'),
    y = requiredProp('y'),
    cells = requiredProp('cells'),
    cellData = {},
}) {
    const cell = cells[`${x},${y}`];
    const {
        character = '.',
        foregroundColor = 'white',
        backgroundColor = 'black',
    } = cellData;
    const {
        color: currentForegroundColor,
        backgroundColor: currentBackgroundColor,
    } = cell.style;

    if (
        currentBackgroundColor !== backgroundColor ||
        currentForegroundColor !== foregroundColor
    ) {
        Object.assign(cell.style, {
            color: foregroundColor,
            backgroundColor,
        });
    }

    if (cell.innerHTML !== character) {
        cell.innerHTML = character;
    }
}

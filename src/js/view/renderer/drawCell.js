import requiredProp from '~/utils/requiredProp';

export default function ({
    x = requiredProp('x'),
    y = requiredProp('y'),
    cells = requiredProp('cells'),

    character = '.',
    foregroundColor = 'white',
    backgroundColor = 'black',
}) {
    const cell = cells[`${x},${y}`];

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

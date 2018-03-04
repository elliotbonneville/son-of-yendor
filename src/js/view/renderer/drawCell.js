import requiredProp from '~/utils/requiredProp';

export default function ({
    x = requiredProp('x'),
    y = requiredProp('y'),
    cells = requiredProp('cells'),
    cellData = {},
}) {
    const cell = cells[`${x},${y}`];
    const { character, foregroundColor, backgroundColor } = cellData;
    const {
        color: currentForegroundColor,
        backgroundColor: currentBackgroundColor,
    } = cell.style;

    if (
        (backgroundColor && currentBackgroundColor !== backgroundColor) ||
        (foregroundColor && currentForegroundColor !== foregroundColor)
    ) {
        Object.assign(cell.style, {
            color: foregroundColor,
            backgroundColor,
        });
    }

    if (character && cell.innerHTML !== character) {
        cell.innerHTML = character;
    }
}

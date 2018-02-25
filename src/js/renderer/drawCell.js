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
    Object.assign(cell.style, {
        color: foregroundColor,
        backgroundColor,
    });
    cell.innerHTML = character;
}

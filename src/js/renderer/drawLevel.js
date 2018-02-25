import requiredProp from '~/utils/requiredProp';

import drawCell from '~/renderer/drawCell';

export default function drawLevel({
    cells = requiredProp('cells'),
    level = requiredProp('level'),
}) { 
    Object.keys(level.tiles).forEach((tile) => {
        const [x, y] = tile.split(',');
        drawCell({
            character: (level.tiles[tile] === 'floor') ? '.' : '#',
            cells,
            x,
            y: Number(y) + 2,
        });
    });
}

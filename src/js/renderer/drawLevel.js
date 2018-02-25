import requiredProp from '~/utils/requiredProp';
import drawCell from '~/renderer/drawCell';

import tileData from '~/data/map/tiles';

export default function drawLevel({
    cells = requiredProp('cells'),
    level = requiredProp('level'),
}) { 
    Object.keys(level.tiles).forEach((tile) => {
        const [x, y] = tile.split(',');
        const {
            character,
            foregroundColor,
            backgroundColor,
        } = tileData[level.tiles[tile]];
        drawCell({
            backgroundColor,
            cells,
            character,
            foregroundColor,
            x,
            y: Number(y) + 2,
        });
    });
}

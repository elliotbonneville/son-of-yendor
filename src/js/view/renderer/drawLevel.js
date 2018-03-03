import requiredProp from '~/utils/requiredProp';
import drawCell from './drawCell';

import tileData from '~/model/data/tiles';

export default function drawLevel({
    cells = requiredProp('cells'),
    level = requiredProp('level'),
}) { 
    Object.entries(level.tiles).forEach(([coords, tile]) => {
        const [x, y] = coords.split(',');
        const {
            character,
            foregroundColor,
            backgroundColor,
        } = tileData[tile];
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

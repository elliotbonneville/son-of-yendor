import {
    GAME_WIDTH,
    GAME_HEIGHT,
    CELL_WIDTH,
    CELL_HEIGHT,
    CELL_PADDING,
    FONT_SIZE,
} from '~/constants';

import { LOAD_LEVEL } from '~/actions/data/levels/types';

import Rectangle from '~/utils/Rectangle';

let cells;

export function init(store) {
    const gameContainer = document.getElementById('game');
    Object.assign(gameContainer.style, {
        width: GAME_WIDTH * CELL_WIDTH,
        height: GAME_HEIGHT * CELL_HEIGHT,
        backgroundColor: 'black',
        fontFamily: 'VideoTerminalScreen',
        position: 'absolute',
        fontSize: `${FONT_SIZE}px`,
        textAlign: 'center',
    });

    cells = {};
    Rectangle(0, 0, GAME_WIDTH, GAME_HEIGHT).forEach(({ x, y }) => {
            const cell = cells[`${x},${y}`] = document.createElement('div');
            Object.assign(cell.style, {
                width: CELL_WIDTH,
                height: CELL_HEIGHT,
                backgroundColor: 'black',
                color: 'white',
                position: 'absolute',
                left: x * CELL_WIDTH,
                top: y * CELL_HEIGHT,
                padding: `${CELL_PADDING}px`,
            });
            cell.innerHTML = '.';
            gameContainer.appendChild(cell);
        });

    store.listen(
        [LOAD_LEVEL],
        ({ id }, state) => drawLevel(state.data.levels[id]),
    );
}

export function drawCell(x, y, char, fgColor = 'white', bgColor = 'black') {
    const cell = cells[`${x},${y}`];
    Object.assign(cell.style, {
        color: fgColor,
        backgroundColor: bgColor,
    });
    cell.innerHTML = char;
}

export function drawLevel(level) { 
    if (!level.active) return;
    Object.keys(level.tiles).forEach(tile => {
        const [x, y] = tile.split(',');
        drawCell(x, y, level.tiles[tile] === 'floor' ? '.' : '#');
    });
}

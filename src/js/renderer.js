import {
    GAME_WIDTH,
    GAME_HEIGHT,
    CELL_WIDTH,
    CELL_HEIGHT,
    CELL_PADDING,
    FONT_SIZE,
} from '~/constants';

let cells;

export function init() {
    const gameContainer = document.getElementById('game');
    Object.assign(gameContainer.style, {
        width: GAME_WIDTH * CELL_WIDTH,
        height: GAME_HEIGHT * CELL_HEIGHT,
        backgroundColor: 'black',
        fontFamily: 'Courier',
        position: 'absolute',
        fontSize: `${FONT_SIZE}px`,
        textAlign: 'center',
    });

    cells = {};
    for (let x = 0; x < GAME_WIDTH; x++) {
        for (let y = 0; y < GAME_HEIGHT; y++) {
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
        }
    }
}

export function drawCell(x, y, char, fgColor, bgColor) {
    const cell = cells[`${x},${y}`];
    Object.assign(cell.style, {
        color: fgColor,
        backgroundColor: bgColor,
    });
    cell.innerHTML = char;
}

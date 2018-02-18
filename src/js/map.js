import Tile from '~/Tile';

export function fillRandom(level) {
    level.rectangle.forEach(({ x, y }) => {
        const tile = level.tiles[`${x},${y}`] = new Tile(
            level,
            x,
            y,
            Math.random() > 0.8 ? 'wall' : 'floor',
        );
        tile.update();
    });
}

export function createPermawall(level) {
    let { left: x, top: y } = level.rectangle;
    const { right, bottom } = level.rectangle;

    for (; x < right; x++) {
        level.getTile({ x, y: 0 }).type = 'wall';
        level.getTile({ x, y: level.height - 1 }).type = 'wall';
    }

    for (; y < bottom; y++) {
        level.getTile({ x: 0, y }).type = 'wall';
        level.getTile({ x: level.width - 1, y }).type = 'wall';
    }
}

(() => {
function fillRandom(level) {
    for (let x = 0; x < level.width; x++) {
        for (let y = 0; y < level.height; y++) {
            const tile = level.tiles[`${x},${y}`] = new window.Tile(
                level,
                x,
                y,
                Math.random() > 0.8 ? 'wall' : 'floor',
            );
            tile.update();
        }
    }
    
    return map;
}

function createPermawall(level) {
    for (let x = 0; x < level.width; x++) {
        level.getTile(x, 0).type = 'wall';
        level.getTile(x, level.height - 1).type = 'wall';
    }

    for (let y = 0; y < level.height; y++) {
        level.getTile(0, y).type = 'wall';
        level.getTile(level.width - 1, y).type = 'wall';
    }

    return map;
}

const map = window.map = { fillRandom, createPermawall };
})();

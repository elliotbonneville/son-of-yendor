(() => {
const { GAME_WIDTH, GAME_HEIGHT } = window.CONSTANTS;
const { fillRandom, createPermawall } = window.map;
const { randomRange } = window.Math2;
class Level {
    constructor(level) {
        this.level = level;
        this.width = GAME_WIDTH;
        this.height = GAME_HEIGHT;
        this.tiles = {};
        this.generate();
    }

    generate() {
        fillRandom(this);
        createPermawall(this);
    }

    getTile(x, y) {
        return this.tiles[`${x},${y}`];
    }
    
    getTileOfType(type) {
        let x;
        let y;
        let tile;

        while (!tile || tile.type !== type) {
            x = randomRange(this.width);
            y = randomRange(this.height);
            tile = this.getTile(x, y);
        }

        return tile;
    }
}

window.Level = Level;
})();

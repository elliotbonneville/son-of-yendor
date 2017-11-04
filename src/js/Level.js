(() => {
const { GAME_WIDTH, GAME_HEIGHT } = window.CONSTANTS;
const { randomRange } = window.Math2;
class Level extends window.GameObject {
    constructor(level) {
        super();

        this.level = level;
        this.width = GAME_WIDTH;
        this.height = GAME_HEIGHT;
        this.tiles = {};
        this.generate();
    }

    generate() {
        window.map.fillRandom(this).createPermawall(this);
    }

    getTile(x, y) {
        return this.tiles[`${x},${y}`];
    }
    
    getTileByType(type) {
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

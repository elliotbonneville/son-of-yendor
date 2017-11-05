import GameObject from '~/GameObject';

import { GAME_WIDTH, GAME_HEIGHT } from '~/constants';
import { randomRange } from '~/Math2';
import { fillRandom, createPermawall } from '~/map';

export default class Level extends GameObject {
    constructor(level) {
        super();

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

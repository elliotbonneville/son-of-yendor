import Location from '~/components/LocationComponent';

import GameObject from '~/GameObject';

import { GAME_WIDTH, GAME_HEIGHT } from '~/constants';
import { randomRange } from '~/Math2';
import { fillRandom, createPermawall } from '~/map';

import Monster from '~/Monster';

export default class Level extends GameObject {
    constructor(level) {
        super();

        this.level = level;
        this.width = GAME_WIDTH;
        this.height = GAME_HEIGHT;
        this.tiles = {};
        this.actors = [];

        this.generate();
    }

    generate() {
        fillRandom(this);
        createPermawall(this);
        this.populate();
    }

    populate() {
        for (let i = 0; i < 40; i++) { 
            const { x, y } = this.getTileByType('floor').getComponent(Location);
            const monster = new Monster('kobold', this, x, y);
            monster.update();
            this.actors.push(monster);
        }       
    }

    tick() {
        this.actors.forEach(actor => actor.tick());
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

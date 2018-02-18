import Location from '~/components/LocationComponent';

import Rectangle from '~/utils/Rectangle';

import GameObject from '~/GameObject';

import { MAP_WIDTH, MAP_HEIGHT } from '~/constants';
import { fillRandom, createPermawall } from '~/map';

import Monster from '~/Monster';

export default class Level extends GameObject {
    constructor(level) {
        super();

        this.level = level;
        this.rectangle = new Rectangle(0, 0, MAP_WIDTH, MAP_HEIGHT);
        this.width = MAP_WIDTH;
        this.height = MAP_HEIGHT;
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

    getTile({ x, y }) {
        return this.tiles[`${x},${y}`];
    }
    
    getTileByType(type) {
        let tile;

        while (!tile || tile.type !== type) {
            tile = this.getTile(this.rectangle.randomPoint());
        }

        return tile;
    }
}

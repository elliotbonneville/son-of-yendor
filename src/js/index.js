import Location from '~/components/LocationComponent';

import * as input from '~/input';
import * as renderer from '~/renderer';

import Level from '~/Level';
import Player from '~/Player';
import Monster from '~/Monster';

let currentLevel;
let monsters = [];

function init() {
    console.log('Initializing game');

    input.init();
    renderer.init();
    
    currentLevel = new Level(1);

    const location = currentLevel.getTileByType('floor').getComponent(Location);
    const player = new Player(currentLevel, location.x, location.y);
    player.update();

    for (let i = 0; i < 40; i++) { 
        const monsterLocation = currentLevel
            .getTileByType('floor')
            .getComponent(Location);
        const monster = new Monster(
            'kobold',
            currentLevel,
            monsterLocation.x,
            monsterLocation.y,
        );
        monster.update();
        monsters.push(monster);
    }
}

export function tick() {
    console.log('Game tick');
    monsters.forEach(monster => monster.tick());
}

init();

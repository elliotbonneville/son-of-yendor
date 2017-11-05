import Location from '~/components/LocationComponent';

import * as input from '~/input';
import * as renderer from '~/renderer';

import Level from '~/Level';
import Player from '~/Player';

let currentLevel;
let monsters = [];

function init() {
    console.log('Initializing game');

    input.init();
    renderer.init();
    
    currentLevel = new Level(1);

    const location = currentLevel
        .getTileByType('floor')
        .getComponent(Location);
    const player = new Player(currentLevel, location.x, location.y);
    player.update();
}

export function tick() {
    console.log('Game tick');
    currentLevel.tick();
}

init();

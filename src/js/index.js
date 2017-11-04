import Location from '~/components/LocationComponent.js';
console.log(Location);

const CONSTANTS = {
    GAME_WIDTH: 80,
    GAME_HEIGHT: 24,
    CELL_WIDTH: 17,
    CELL_HEIGHT: 24,
    CELL_PADDING: 3,
    FONT_SIZE: 22,
};

let currentLevel;
let monsters = [];

function init() {
    console.log('Initializing game');

    window.input.init();
    window.renderer.init();
    
    currentLevel = new window.Level(1);

    const location = currentLevel
        .getTileByType('floor')
        .getComponent(window.LocationComponent);
    const player = new window.Player(currentLevel, location.x, location.y);
    player.update();

    for (let i = 0; i < 40; i++) { 
        const monsterLocation = currentLevel
            .getTileByType('floor')
            .getComponent(window.LocationComponent);
        const monster = new window.Monster(
            'kobold',
            currentLevel,
            monsterLocation.x,
            monsterLocation.y,
        );
        monster.update();
        monsters.push(monster);
    }
}

function tick() {
    console.log('Game tick');
    monsters.forEach(monster => monster.tick());
}

setTimeout(init, 100);
export { CONSTANTS };

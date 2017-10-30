(() => {
window.CONSTANTS = {
    GAME_WIDTH: 80,
    GAME_HEIGHT: 24,
    CELL_WIDTH: 17,
    CELL_HEIGHT: 24,
    CELL_PADDING: 3,
    FONT_SIZE: 22,
};

let currentLevel;

function init() {
    console.log('Initializing game');

    window.input.init();
    window.renderer.init();
    
    currentLevel = new window.Level(1);
    window.renderer.drawLevel(currentLevel);
}

setTimeout(init, 10);
})();

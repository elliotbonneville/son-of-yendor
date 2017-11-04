(() => {
class PlayerInputComponent extends window.Component {
    constructor(...args) {
        super(...args);
        
        const locomotor = this.owner.getComponent(window.LocomotionComponent);
        const { input } = window;
        input.bindKeyListener('down', 'left', this.move.bind(this, -1, 0));
        input.bindKeyListener('down', 'up', this.move.bind(this, 0, -1));
        input.bindKeyListener('down', 'right', this.move.bind(this, 1, 0));
        input.bindKeyListener('down', 'down', this.move.bind(this, 0, 1));
    }

    move(x, y) {
        const locomotor = this.owner.getComponent(window.LocomotionComponent);
        const moved = locomotor.move(x, y);
        if (moved) {
            window.game.tick();
        }
    }
}

window.PlayerInputComponent = PlayerInputComponent;
})();

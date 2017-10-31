(() => {
class PlayerInputComponent extends window.Component {
    constructor(...args) {
        super(...args);
        
        const locomotor = this.owner.getComponent(window.LocomotionComponent);
        const { move } = locomotor;
        const input = window.input;
        input.bindKeyListener('down', 'left', this.move.bind(this, -1, 0));
        input.bindKeyListener('down', 'up', this.move.bind(this, 0, -1));
        input.bindKeyListener('down', 'right', this.move.bind(this, 1, 0));
        input.bindKeyListener('down', 'down', this.move.bind(this, 0, 1));
    }

    move(x, y) {
        if (this.owner.getComponent(window.LocomotionComponent).move(x, y)) {
            window.game.tick();
        }
    }
}

window.PlayerInputComponent = PlayerInputComponent;
})();

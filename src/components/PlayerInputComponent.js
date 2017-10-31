(() => {
class PlayerInputComponent extends window.Component {
    constructor(...args) {
        super(...args);
        
        const locomotor = this.owner.getComponent(window.LocomotionComponent);
        const { move } = locomotor;
        const input = window.input;
        input.bindKeyListener('down', 'left', move.bind(locomotor, -1, 0));
        input.bindKeyListener('down', 'up', move.bind(locomotor, 0, -1));
        input.bindKeyListener('down', 'right', move.bind(locomotor, 1, 0));
        input.bindKeyListener('down', 'down', move.bind(locomotor, 0, 1));
    }
}

window.PlayerInputComponent = PlayerInputComponent;
})();

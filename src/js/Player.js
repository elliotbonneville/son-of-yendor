(() => {
class Player extends window.Actor {
    constructor(...args) {
        super(...args);
        this.addComponent(new window.PlayerInputComponent(this));
        this.getComponent(window.RendererComponent).fgColor = 'red';
    }
}

window.Player = Player;
})();

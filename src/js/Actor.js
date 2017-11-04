(() => {
class Actor extends window.GameObject {
    constructor(level, x, y) {
        super();
        this.addComponents([
            new window.LocationComponent(this, level, x, y),
            new window.LocomotionComponent(this),
            new window.RendererComponent(this, '@', 'white'),
            new window.ColliderComponent(this, true),
            new window.BodyComponent(this, 10),
        ]);
    }
}

window.Actor = Actor;
})();

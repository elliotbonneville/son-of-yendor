(() => {
class ColliderComponent extends window.Component {
    constructor(owner, enabled) {
        super(owner);
        this.enabled = enabled;
    }
}

window.ColliderComponent = ColliderComponent;
})();

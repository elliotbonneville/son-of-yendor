(() => {
class GameObject {
    this.constructor(components) {
        this.components = [];
    }

    update() {
        this.components.forEach(component => component.update());
    }
}
})();

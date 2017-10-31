(() => {
class Component {
    constructor(owner) {
        this.owner = owner;
    }

    update() {}
}

window.Component = Component;
})();

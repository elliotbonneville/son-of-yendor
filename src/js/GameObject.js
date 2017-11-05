export default class GameObject {
    constructor(components) {
        this.components = [];
        GameObject.gameObjects.push(this);
    }

    addComponent(component) {
        component.owner = this;
        this.components.push(component);
    }

    addComponents(components) {
        components.forEach(component => this.addComponent(component));
    }

    getComponent(componentConstructor) {
        return this.components.filter(
            (component) => (component instanceof componentConstructor),
        )[0];
    }

    update() {
        this.components.forEach((component) => {
            if (!component.update) console.log(component);
            component.update();
        });
    }
}

GameObject.gameObjects = [];

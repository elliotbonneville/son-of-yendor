(() => {
class Component {
    constructor() {

    }

    update() {
        console.log('This Component does not have an update method.');
    }
}

window.Component = Component;
})();

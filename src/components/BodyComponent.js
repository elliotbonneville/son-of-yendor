(() => {
class BodyComponent extends window.Component {
    constructor(owner, hp) {
        super(owner);
        this.hp = hp;
    }
}

window.BodyComponent = BodyComponent;
})();

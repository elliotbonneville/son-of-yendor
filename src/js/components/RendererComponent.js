(() => {
class RendererComponent extends window.Component {
    constructor(owner, char, fgColor = 'white', bgColor = 'black') {
        super(owner);
        Object.assign(this, { char, fgColor, bgColor });
    }

    update() {
        const { char, fgColor, bgColor } = this;
        const location = this.owner.getComponent(LocationComponent);
        if (!location) return;
        renderer.drawCell(location.x, location.y, char, fgColor, bgColor);
    }
}

window.RendererComponent = RendererComponent;
})();

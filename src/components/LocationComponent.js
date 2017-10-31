(() => {
class LocationComponent extends window.Component {
    constructor(owner, level, x, y) {
        super(owner);
        this.level = level;
        this.x = x;
        this.y = y;
    }
}

window.LocationComponent = LocationComponent;
})();

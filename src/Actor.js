(() => {
class Actor extends window.GameObject {
    constructor(level, x, y) {

    }

    function move(dx, dy) {
        const x = this.x + dx;
        const y = this.y + dy;
        const tile = this.level.getTile(x, y);

        if (!tile.walkable) {
            return;
        }

        this.x = x;
        this.y = y;
    }
}

window.Actor = Actor;
})();

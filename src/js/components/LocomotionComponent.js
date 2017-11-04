(() => {
class LocomotionComponent extends window.Component {
    move(dx, dy) {
        const location = this.owner.getComponent(window.LocationComponent);
        const collider = this.owner.getComponent(window.ColliderComponent);
        const x = location.x + dx;
        const y = location.y + dy;
        const previousTile = location.level.getTile(location.x, location.y);
        const tile = location.level.getTile(x, y);
        const tileCollider = tile.getComponent(window.ColliderComponent);

        if (
            collider &&
            collider.enabled &&
            tileCollider &&
            tileCollider.enabled
        ) {
            return false;
        }

        location.x = x;
        location.y = y;
        this.owner.update();
        previousTile.update();
        return true;
    }
}

window.LocomotionComponent = LocomotionComponent;
})();

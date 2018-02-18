import Component from '~/components/Component';
import Location from '~/components/LocationComponent';
import Collider from '~/components/ColliderComponent';

export default class LocomotionComponent extends Component {
    move(dx, dy) {
        const location = this.owner.getComponent(Location);
        const collider = this.owner.getComponent(Collider);
        const x = location.x + dx;
        const y = location.y + dy;
        const previousTile = location.level.getTile(location);
        const tile = location.level.getTile({ x, y });
        const tileCollider = tile.getComponent(Collider);

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

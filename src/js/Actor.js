import GameObject from '~/GameObject';

import Location from '~/components/LocationComponent';
import Locomotion from '~/components/LocomotionComponent';
import Renderer from '~/components/RendererComponent';
import Collider from '~/components/ColliderComponent';
import Body from '~/components/BodyComponent';

export default class Actor extends GameObject {
    constructor(level, x, y) {
        super();
        this.addComponents([
            new Location(this, level, x, y),
            new Locomotion(this),
            new Renderer(this, '@', 'white'),
            new Collider(this, true),
            new Body(this, 10),
        ]);
    }
}

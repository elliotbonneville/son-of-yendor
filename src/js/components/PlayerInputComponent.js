import Component from '~/components/Component';
import Location from '~/components/LocationComponent';
import Locomotion from '~/components/LocomotionComponent';

import { bindKeyListener } from '~/input';

import { tick } from '~/app';

export default class PlayerInputComponent extends Component {
    constructor(...args) {
        super(...args);
        
        const locomotor = this.owner.getComponent(Location);
        bindKeyListener('down', 'left', this.move.bind(this, -1, 0));
        bindKeyListener('down', 'up', this.move.bind(this, 0, -1));
        bindKeyListener('down', 'right', this.move.bind(this, 1, 0));
        bindKeyListener('down', 'down', this.move.bind(this, 0, 1));
    }

    move(x, y) {
        const locomotor = this.owner.getComponent(Locomotion);
        const moved = locomotor.move(x, y);
        if (moved) tick();
    }
}

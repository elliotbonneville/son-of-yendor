typeof undefined;
import Renderer from '~/components/RendererComponent';
import PlayerInput from '~/components/PlayerInputComponent';

import Actor from '~/Actor';

export default class Player extends Actor {
    constructor(...args) {
        super(...args);
        this.addComponent(new PlayerInput(this));
        this.getComponent(Renderer).fgColor = 'red';
    }
}

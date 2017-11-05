import Component from '~/components/Component';
import Location from '~/components/LocationComponent';

import * as renderer from '~/renderer';

export default class RendererComponent extends Component {
    constructor(owner, char, fgColor = 'white', bgColor = 'black') {
        super(owner);
        Object.assign(this, { char, fgColor, bgColor });
    }

    update() {
        const { char, fgColor, bgColor } = this;
        const location = this.owner.getComponent(Location);
        if (!location) return;
        renderer.drawCell(location.x, location.y, char, fgColor, bgColor);
    }
}

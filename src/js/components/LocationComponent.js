import Component from '~/components/Component.js';

export default class LocationComponent extends Component {
    constructor(owner, level, x, y) {
        super(owner);
        this.level = level;
        this.x = x;
        this.y = y;
    }
}

import Component from '~/components/Component';

export default class ColliderComponent extends Component {
    constructor(owner, enabled) {
        super(owner);
        this.enabled = enabled;
    }
}

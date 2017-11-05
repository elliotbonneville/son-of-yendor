import Component from '~/components/Component';

export default class BodyComponent extends Component {
    constructor(owner, hp) {
        super(owner);
        this.hp = hp;
    }
}

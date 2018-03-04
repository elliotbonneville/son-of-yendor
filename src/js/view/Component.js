import requiredProp from '~/utils/requiredProp';

export default class Component {
    constructor({
        x = requiredProp('x'),
        y = requiredProp('y'),
        onStateChange = requiredProp('onStateChange'),
        render = requiredProp('render'),
    }) {
        this.x = x;
        this.y = y;
        this.cells = {};
        this.render = render;
        this.state = {};

        this.render = render;
        this.onStateChange = onStateChange;
    }

    setState(newState) {
        const oldState = this.state;
        this.state = Object.assign(oldState, newState);
        this.cells = this.render(this.state);
    }
}

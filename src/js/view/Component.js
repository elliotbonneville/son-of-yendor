import requiredProp from '~/utils/requiredProp';

export default class Component {
    constructor({
        x = requiredProp('x'),
        y = requiredProp('y'),
        selectState = requiredProp('selectState'),
        render = requiredProp('render'),
    }) {
        this.x = x;
        this.y = y;
        this.cells = {};
        this.render = render;
        this.state = {};

        this.selectState = selectState;
    }

    setState(newState) {
        const oldState = this.state;
        this.state = Object.assign(oldState, newState);
        this.cells = this.render(this.state);
    }

    onStateChange(newState) {
        this.selectState(newState);
    }
}

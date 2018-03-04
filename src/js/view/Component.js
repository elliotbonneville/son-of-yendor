import requiredProp from '~/utils/requiredProp';
import rectangle from '~/utils/rectangle';

export default class Component {
    constructor({
        x = requiredProp('x'),
        y = requiredProp('y'),
        width = requiredProp('width'),
        height = requiredProp('height'),
        selectState = requiredProp('selectState'),
        render = requiredProp('render'),
        mouseListeners = {},
    }) {
        this.bounds = rectangle({ x, y, width, height });
        this.cells = {};
        this.render = render;
        this.state = {};
        this.mouseListeners = mouseListeners;

        this.selectState = selectState;
    }

    handleMouseEvent({ event, location  }) {
        if (!this.mouseListeners[event.type]) return;

        const { x, y } = location;
        const relativeLocation = {
            x: x - this.bounds.left,
            y: y - this.bounds.top,
        };

        this.mouseListeners[event.type].forEach(
            listener => listener.call(
                this,
                { event, location: relativeLocation },
            ),
        );
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

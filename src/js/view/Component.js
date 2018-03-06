import requiredProp from '~/utils/requiredProp';
import rectangle from '~/utils/rectangle';

import Cell from '~/view/Cell';

export default class Component {
    constructor({
        x = requiredProp('x'),
        y = requiredProp('y'),
        width = requiredProp('width'),
        height = requiredProp('height'),
        render = requiredProp('render'),

        state = {},
        mouseListeners = {},

        selectState = state => state,
    }) {
        this.bounds = rectangle({ x, y, width, height });
        this.cells = {};
        this.render = render;
        this.state = state;
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
        this.state = Object.assign(this.state, newState);
    }

    onStateChange(newState) {
        if (!this.selectState) return;
        const oldState = this.state;
        const newSelectedState = this.selectState(newState);
        if (oldState === newSelectedState) return;
        this.state = newSelectedState;
    }
}

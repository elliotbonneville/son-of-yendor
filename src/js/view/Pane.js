import requiredProp from '~/utils/requiredProp';
import rectangle from '~/utils/rectangle';

export default class Pane {
    constructor({
        x = requiredProp('x'),
        y = requiredProp('y'),
        width = requiredProp('width'),
        height = requiredProp('height'),

        children = [],
        state = {},
        selectState = () => {},
    }) {
        this.bounds = rectangle({ x, y, width, height });

        this.children = children;
        this.state = state;
        this.selectState = selectState;

        this.cells = {};
    }

    // blit output of data onto a renderer
    blit({ renderer = requiredProp('renderer') }) {
        this.bounds.forEach(({ x, y }) => {
            renderer.drawCell({ x, y, cellData: this.cells[`${x},${y}`] });
        });
    }

    handleMouseEvent = ({
        event = requiredProp('event'),
        location = requiredProp('location'),
    }) => {
        const { x, y } = location;
        const relativeLocation = {
            x: x - this.bounds.left,
            y: y - this.bounds.top,
        };
        this.children.forEach(child => {
            if (!child.bounds.contains(relativeLocation)) return;
            child.handleMouseEvent({ event, location: relativeLocation })
        });
    }

    // memoized function to flatten and position render data from all children
    render({ offsetX, offsetY }) {
        this.cells = this.children.reduce(
            (cells, child) => {
                const renderData = child.render({
                    offsetX: offsetX + this.bounds.left,
                    offsetY: offsetY + this.bounds.top,
                });
                if (!renderData) return cells;
                Object.entries(renderData).forEach(([coordinates, cell]) => {
                    const [cellX, cellY] = coordinates.split(',');
                    const x = Number(cellX)
                        + Number(child.bounds.left)
                        + Number(offsetX);
                    const y = Number(cellY)
                        + Number(child.bounds.top)
                        + Number(offsetY);
                    cells[`${x},${y}`] = cell;
                });
                return cells;
            },
            {},
        );

        return this.cells;
    }

    setState(newState) {
        const oldState = this.state;
        this.state = Object.assign(oldState, newState);
    }

    // Propagate state to children
    onStateChange = (newState) => {
        this.selectState(newState);
        this.children.forEach(child => child.onStateChange(newState));
        this.cells = this.render(this.state);
    }
}

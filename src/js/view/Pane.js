import requiredProp from '~/utils/requiredProp';
import rectangle from '~/utils/rectangle';

export default class Pane {
    constructor({
        x = requiredProp('x'),
        y = requiredProp('y'),
        width = requiredProp('width'),
        height = requiredProp('height'),
        children = [],
    }) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.children = children;

        this.cells = {};
    }

    // blit output of data onto a renderer
    blit({ renderer = requiredProp('renderer') }) {
        const bounds = rectangle(this);
        bounds.forEach(({ x, y }) => {
            renderer.drawCell({ x, y, cellData: this.cells[`${x},${y}`] });
        });
    }

    // memoized function to flatten and position render data from all children
    render({ offsetX, offsetY }) {
        this.cells = this.children.reduce(
            (cells, child) => {
                const renderData = child.render({
                    offsetX: offsetX + this.x,
                    offsetY: offsetY + this.y,
                });
                if (!renderData) return cells;
                Object.entries(renderData).forEach(([coordinates, cell]) => {
                    const [cellX, cellY] = coordinates.split(',');
                    const x = Number(cellX) + Number(child.x) + Number(offsetX);
                    const y = Number(cellY) + Number(child.y) + Number(offsetY);
                    cells[`${x},${y}`] = cell;
                });
                return cells;
            },
            {},
        );

        return this.cells;
    }

    // Propagate state to children
    onStateChange = (newState) => {
        this.children.forEach(child => child.onStateChange(newState));
    }
}

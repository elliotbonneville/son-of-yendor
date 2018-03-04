import { MAP_WIDTH, MAP_HEIGHT } from '~/constants';

import rectangle from '~/utils/rectangle';

import Component from '~/view/Component';
import Cell from '~/view/Cell';

import {
    actions as mouseActions,
    selectors as mouseSelectors,
} from '~/model/features/ui/mouse/';

export default store => new Component({
    x: 0,
    y: 2,
    width: MAP_WIDTH,
    height: MAP_HEIGHT,
    selectState: (state) => {
        const newState = {
            mouseDown: mouseSelectors.mouseDown(state),
            mousePosition: mouseSelectors.mousePosition(state),
            selectionBounds: rectangle(mouseSelectors.selectionBounds(state)),
        };
        return newState;
    },
    mouseListeners: {
        mousedown: [
            function({ location }) {
                store.dispatch(
                    mouseActions.setMouseDown({
                        mouseDown: true,
                        mouseDownPosition: location
                    }),
                );
            }
        ],
        mouseup: [
            function ({ location }) {
                store.dispatch(
                    mouseActions.setMouseDown({
                        mouseDown: false,
                        mouseDownPosition: location
                    }),
                ); 
            }
        ],
        mouseenter: [
            function ({ location }) {
                if (!this.state.mouseDown) return;
                store.dispatch(
                    mouseActions.setMousePosition({ mousePosition: location }),
                );
            }
        ],
    },
    render() {
        return this.state.selectionBounds.reduce(
            (cells, { x, y }) => Object.assign(
                cells,
                {
                    [`${x},${y}`]: new Cell({
                        x,
                        y,
                        backgroundColor: 'gray',
                    }),
                },
            ),
            {},
        );
    },
});

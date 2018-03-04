import { MAP_WIDTH, MAP_HEIGHT } from '~/constants';

import rectangle from '~/utils/rectangle';

import Component from '~/view/Component';
import Cell from '~/view/Cell';

// Actions
import setMouseDown from '~/model/features/ui/setMouseDown.action';
import setMousePosition from '~/model/features/ui/setMousePosition.action';

// Selectors
import {
    mouseDown,
    selectionBounds,
    mousePosition,
} from '~/model/features/ui/mouse.selector';

export default store => new Component({
    x: 0,
    y: 2,
    width: MAP_WIDTH,
    height: MAP_HEIGHT,
    selectState: (state) => {
        const newState = {
            mouseDown: mouseDown(state),
            mousePosition: mousePosition(state),
            selectionBounds: rectangle(selectionBounds(state)),
        };
        return newState;
    },
    mouseListeners: {
        mousedown: [
            function({ location }) {
                store.dispatch(
                    setMouseDown({
                        mouseDown: true,
                        mouseDownPosition: location
                    }),
                );
            }
        ],
        mouseup: [
            function ({ location }) {
                store.dispatch(
                    setMouseDown({
                        mouseDown: false,
                        mouseDownPosition: location
                    }),
                ); 
            }
        ],
        mouseenter: [
            function ({ location }) {
                if (!this.state.mouseDown) return;
                store.dispatch(setMousePosition({ mousePosition: location }));
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

import {
    GAME_WIDTH,
    GAME_HEIGHT,
    CELL_WIDTH,
    CELL_HEIGHT,
    CELL_PADDING_LEFT,
    CELL_PADDING_TOP,
    FONT_SIZE,
} from '~/constants';

import rectangle from '~/utils/rectangle';
import requiredProp from '~/utils/requiredProp';

import { LOAD_LEVEL } from '~/actions/data/levels/types';
import { CREATE_ACTOR } from '~/actions/data/entities/actors/types';

import drawLevel from '~/renderer/drawLevel';
import { drawActor } from '~/renderer/entities/actors';

const createRenderCells = ({
    width = GAME_WIDTH,
    height = GAME_HEIGHT,
}) => {
    const cells = {};
    const domNode = document.createElement('div');

    rectangle({ width, height }).forEach(({ x, y }) => {
        const cell = document.createElement('div');
        Object.assign(cell.style, {
            fontFamily: 'VideoTerminalScreen',
            fontSize: `${FONT_SIZE}px`,
            position: 'absolute',
            width: CELL_WIDTH,
            height: CELL_HEIGHT,
            left: x * CELL_WIDTH,
            top: y * CELL_HEIGHT,
            textAlign: 'center',
            verticalAlign: 'middle',
            lineHeight: `${CELL_HEIGHT}px`,
            paddingLeft: CELL_PADDING_LEFT,
            paddingTop: CELL_PADDING_TOP,
        });
        domNode.appendChild(cell);
        Object.assign(cells, { [`${x},${y}`]: cell });
    });

    return { domNode, cells };
};

const createRenderer = ({
    container = requiredProp('container'),
    store = requiredProp('store'),

    width,
    height,
}) => {
    let cells;
    let domNode;
    let listenerRemovers;

    const listenerDefinitions = [
        {
            actions: [LOAD_LEVEL],
            callback: ({ id }, state) => drawLevel({
                cells,
                level: state.data.levels[id],
            }),
        },   
    ];
    
    return {
        init: () => {
            ({ domNode, cells } = createRenderCells({ width, height }));
            container.appendChild(domNode);
            listenerRemovers = listenerDefinitions.map(
                ({ actions, callback }) => store.listen(actions, callback),
            );
        },
        destroy: () => {
            container.removeChild(domNode);
            listenerRemovers.forEach(remover => remover());
        },
    };
};

export default createRenderer;

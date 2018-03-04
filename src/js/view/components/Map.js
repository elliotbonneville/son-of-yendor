import { MAP_WIDTH, MAP_HEIGHT } from '~/constants';

import Component from '~/view/Component';
import Cell from '~/view/Cell';

import tileData from '~/model/data/tiles';

import { getLevel } from '~/model/features/level/selectors';

export default () => new Component({
    x: 0,
    y: 2,
    width: MAP_WIDTH,
    height: MAP_HEIGHT,
    selectState(newState) {
        const level = getLevel(newState);
        
        // Don't update the level if it hasn't changed yet
        if (level === this.state.level) return;
        this.setState({ level });
    },
    render() {
        const { level } = this.state;
        if (!level) return {};
        return Object.entries(level.tiles).reduce(
            (cells, [coordinates, cell]) => {
                const {
                    character,
                    foregroundColor,
                    backgroundColor,
                } = tileData[cell];
                return Object.assign(
                    cells, 
                    {
                        [coordinates]: new Cell({
                            character,
                            foregroundColor,
                            backgroundColor,
                        }),
                    },
                );
            },
            {},
        );
    },
});

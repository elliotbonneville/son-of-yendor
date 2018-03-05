import { MAP_WIDTH, MAP_HEIGHT } from '~/constants';

import Component from '~/view/Component';

export default ({ selectStateData, renderData }) => new Component({
    x: 0,
    y: 2,
    width: MAP_WIDTH,
    height: MAP_HEIGHT,
    selectState: newState => ({ data: selectStateData(newState) }),
    render: function () {
        const { data } = this.state;
        return data ? renderData(data) : {};
    },
});

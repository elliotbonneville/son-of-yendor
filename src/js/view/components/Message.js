import Component from '~/view/Component';
import label from '~/view/label';

import { MAP_WIDTH } from '~/constants';

export default ({ message, y }) => new Component({
    x: 0,
    y,
    width: MAP_WIDTH,
    height: 1,
    onStateChange: () => {},
    render: () => label({ text: message }),
    selectState: () => {},
});

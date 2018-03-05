import Component from '~/view/Component';

import label from '~/view/label';

export default ({ visible, x, y, character, mouseListeners }) => new Component({
    x,
    y,
    width: 1,
    height: 1,
    mouseListeners: (visible) ? mouseListeners : {},
    render: () => {
        return (visible)
            ? label({
                x: 0,
                y: 0,
                text: character,
            })
            : {};
    },
});

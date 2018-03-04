import Component from '~/view/Component';
import label from '~/view/label';

export default ({ message, y }) => new Component({
    x: 0,
    y,
    onStateChange: () => {},
    render: () => label({ text: message }),
    selectState: () => {},
});

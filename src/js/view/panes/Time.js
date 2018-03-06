import { MAP_WIDTH } from '~/constants';

import Pane from '~/view/Pane';
import Component from '~/view/Component';
import label from '~/view/label';

import { getTime } from '~/model/features/time/selectors';
import setPaused from '~/model/features/time/setPaused.action';

export default store => new Pane({
    x: MAP_WIDTH - 20,
    y: 0,
    width: 20,
    height: 1,
    children: [
        new Component({
            x: 0,
            y: 0,
            width: 10,
            height: 1,
            selectState: state => getTime(state),
            render() {
                const text = `Turn: ${this.state.tick}`;
                return label({
                    x: this.bounds.width - text.length,
                    text,
                });
            },
        }),
        new Component({
            x: 10,
            y: 0,
            width: 10,
            height: 1,
            mouseListeners: {
                mouseup: [
                    function () {
                        store.dispatch(setPaused(!this.state.paused));
                    },
                ],
            },
            selectState: state => getTime(state),
            render() {
                const text = `[${this.state.paused ? 'Play' : 'Pause'}]`;
                return label({
                    x: this.bounds.width - text.length,
                    text,
                });
            },
        }),
    ],
});

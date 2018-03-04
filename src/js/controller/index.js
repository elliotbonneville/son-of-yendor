import requiredProp from '~/utils/requiredProp';

import createKeyboardManager from '~/controller/keyboard';
import createMouseManager from '~/controller/mouse';

export default function createController({
    store = requiredProp('store'),
    renderer = requiredProp('renderer'),
}) {
    const keyboard = createKeyboardManager(store);
    const mouse = createMouseManager(renderer);
    return {
        keyboard,
        mouse,
        init: () => {
            keyboard.init();
            mouse.init(renderer);
        },
    };
}

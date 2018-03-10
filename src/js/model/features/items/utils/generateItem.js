import seedRandom from 'seedrandom';

import itemDefinitions from '~/model/data/items/definitions';

export default (value, seed) => {
    const items = Object.entries(itemDefinitions).filter(
        ([name, item]) => item.data.value <= value && item.data.value > 0,
    );

    const itemIndex = Math.floor(seedRandom(seed)() * items.length);
    const [name, data] = items[itemIndex];
    return [name, data];
}

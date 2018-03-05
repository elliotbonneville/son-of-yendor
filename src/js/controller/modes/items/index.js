import modeTypes from '~/controller/modes/modeTypes';

const items = ['Sword', 'Bow'];

export default {
    title: 'Items',
    mode: modeTypes.ITEM,
    children: items.map(title => ({ title })),
}

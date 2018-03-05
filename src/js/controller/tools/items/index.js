import toolTypes from '~/controller/tools/toolTypes';

const items = ['Sword', 'Bow'];

export const menu = {
    title: 'Items',
    mode: toolTypes.ITEM,
    children: items.map(title => ({ title })),
}

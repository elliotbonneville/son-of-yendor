import { treasureToPowerRatio } from '~/model/constants';

import modifyMana from '~/model/features/stats/modifyMana.action';

import { getValueOfItemsOnFloor } from '~/model/features/items/selectors';
import { getMana } from '~/model/features/stats/selectors';

const tickMana = ({ store }) => {
    const state = store.getState();
    const totalTreasure = getValueOfItemsOnFloor(state);
    const manaIncrease = parseInt(totalTreasure * treasureToPowerRatio);
    const currentMana = getMana(state);
    const maxMana = Math.min(100, currentMana + manaIncrease);
    const difference = maxMana - currentMana;
    store.dispatch(modifyMana(difference));
}

export default ({ store }) => {
    tickMana({ store });
};

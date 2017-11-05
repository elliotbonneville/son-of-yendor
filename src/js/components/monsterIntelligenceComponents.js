import Component from '~/components/Component';
import Locomotion from '~/components/LocomotionComponent';

import { randomDirection } from '~/Math2';

export default class MonsterIntelligenceComponent extends Component {
    tick() {}
}

class RandomMonsterIntelligence extends MonsterIntelligenceComponent {
    tick() {
        const { x, y } = randomDirection();
        this.owner.getComponent(Locomotion).move(x, y);
    }
}

const monsterIntelligenceComponents = {
    random: RandomMonsterIntelligence,
};

export { monsterIntelligenceComponents };

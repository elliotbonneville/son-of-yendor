import Actor from '~/Actor';

import Renderer from '~/components/RendererComponent';
import Body from '~/components/BodyComponent';
import MonsterIntelligence, { monsterIntelligenceComponents }
    from '~/components/monsterIntelligenceComponents';

const monsterData = {
    kobold: {
        char: 'k',
        fgColor: 'green',
        ai: 'random',
        hp: 10,
    },
};

export default class Monster extends Actor {
    constructor(type, ...args) {
        super(...args);
        this.type = type;
        const { char, fgColor, ai, hp } = monsterData[type];
        Object.assign(
            this.getComponent(Renderer),
            { char, fgColor },
        );
        Object.assign(
            this.getComponent(Body),
            { hp },
        );
        this.addComponent(new monsterIntelligenceComponents[ai]);
    }

    tick() {
        this.getComponent(MonsterIntelligence).tick();
    }
}

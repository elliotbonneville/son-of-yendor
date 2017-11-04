(() => {
const monsterData = {
    kobold: {
        char: 'k',
        fgColor: 'green',
        ai: 'random',
        hp: 10,
    },
};

class Monster extends window.Actor {
    constructor(type, ...args) {
        super(...args);
        this.type = type;
        const { char, fgColor, ai, hp } = monsterData[type];
        Object.assign(
            this.getComponent(window.RendererComponent),
            { char, fgColor },
        );
        Object.assign(
            this.getComponent(window.BodyComponent),
            { hp },
        );
        this.addComponent(new window.monsterIntelligenceComponents[ai]);
    }

    tick() {
        this.getComponent(window.MonsterIntelligenceComponent).tick();
    }
}

window.Monster = Monster;
})();

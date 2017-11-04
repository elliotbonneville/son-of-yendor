(() => {
class MonsterIntelligenceComponent extends window.Component {
    tick() {}
}

class RandomMonsterIntelligence extends MonsterIntelligenceComponent {
    tick() {
        const { x, y } = window.Math2.randomDirection();
        this.owner.getComponent(window.LocomotionComponent).move(x, y);
    }
}

window.MonsterIntelligenceComponent = MonsterIntelligenceComponent;
window.monsterIntelligenceComponents = {
    random: RandomMonsterIntelligence,
};
})();

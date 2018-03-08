import { DAMAGE_ACTOR } from './types';
export default ({ actor, damage }) => ({
    type: DAMAGE_ACTOR,
    actor,
    damage,
});

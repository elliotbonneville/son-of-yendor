export default (actors, { actor, damage }) => ({
    ...actors,
    [actor.id]: {
        ...actor,
        health: actors[actor.id].health - damage,
    },
});

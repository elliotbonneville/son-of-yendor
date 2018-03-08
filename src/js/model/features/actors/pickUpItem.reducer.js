export default (actors, { actor, item }) => ({
    ...actors,
    [actor.id]: {
        ...actor,
        inventory: [...actor.inventory, item],
    },
});

export default (actors, { actor, item }) => ({
    ...actors,
    [actor.id]: {
        ...actors,
        inventory: actor.inventory.filter(heldItem => heldItem !== item),
    },
});

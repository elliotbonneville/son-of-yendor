export default (actors, { id, item }) => ({
    ...actors,
    [id]: {
        ...actors[id],
        inventory: actors[id].inventory.filter(heldItem => heldItem !== item),
    },
});

export default (actors, { actorId, itemId }) => ({
    ...actors,
    [actorId]: {
        ...actors[actorId],
        inventory: actors[actorId].inventory.filter(id => id !== itemId),
    },
});

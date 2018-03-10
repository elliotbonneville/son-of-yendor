export default (actors, { actorId, position }) => ({
    ...actors,
    [actorId]: {
        ...actors[actorId],
        itinerary: actors[actorId].itinerary.filter(
            destination => destination.position !== position,
        ),
    },
});

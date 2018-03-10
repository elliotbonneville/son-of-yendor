export default (actors, { id }) =>
    Object.entries(actors)
        .filter(([currentId]) => currentId !== id)
        .reduce(
            (newActors, [currentId, currentActor]) => Object.assign(
                newActors,
                { [currentId]: currentActor },
            ),
            {},
        );

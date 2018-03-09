export default (actors, { actor }) => Object.entries(actors)
    .filter(([id, currentActor]) => currentActor !== actor)
    .reduce(
        (newActors, [id, currentActor]) => Object.assign(
            newActors,
            { [id]: currentActor },
        ),
        {},
    );

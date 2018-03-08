export default (actors, { actor }) => ({
    ...actors,
    [actor.id]: {
        ...actor,
        dead: true,
    },
});

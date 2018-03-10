export default (actors, { id }) => ({
    ...actors,
    [id]: {
        ...actors[id],
        dead: true,
    },
});

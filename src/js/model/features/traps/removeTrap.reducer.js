export default (traps, { trap }) => ({
    ...traps,
    [trap.id]: { ...trap, position: undefined },
});

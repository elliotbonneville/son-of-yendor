export default function(state, { id }) {
    return Object.entries(state).reduce(
        (newState, [levelId, level]) => ({
            ...newState,
            [levelId]: {
                ...level,
                active: levelId == id,
            },
        }),
        {},
    );
}

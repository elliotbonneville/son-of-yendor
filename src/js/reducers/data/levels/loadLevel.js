export default function(state, { id }) {
    return Object.keys(state).reduce(
        (newState, levelId) => ({
            ...newState,
            [levelId]: {
                ...state[levelId],
                active: levelId == id,
            },
        }),
        {},
    );
}

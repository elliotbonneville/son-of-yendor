export default (state, { id, position }) => {
    const { x, y } = position;

    if (typeof x === 'undefined' || typeof y === 'undefined') return state;

    return {
        ...state,
        [id]: Object.assign(state[id], { position }),
    };
};

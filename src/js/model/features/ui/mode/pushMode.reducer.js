export default ((state, { modeTitle }) => ({
    ...state,
    mode: [modeTitle, ...(state.mode || [])],
}));

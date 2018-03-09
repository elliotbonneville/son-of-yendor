export default ((state, { modeTitle }) => ({
    ...state,
    mode: modeTitle ? [modeTitle, ...(state.mode || [])] : state.mode,
}));

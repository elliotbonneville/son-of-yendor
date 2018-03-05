export default state => ({
    ...state,
    mode: (state.mode || [null]).slice(1),
});

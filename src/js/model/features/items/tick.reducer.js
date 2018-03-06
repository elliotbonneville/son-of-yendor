export default state => ({
    ...state,
    tick: state.paused ? state.tick : state.tick + 1,
});

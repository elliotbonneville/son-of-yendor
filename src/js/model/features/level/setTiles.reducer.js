export default (state, { newTileData }) => ({
    ...state,
    tiles: Object.assign({}, state.tiles, newTileData),
});

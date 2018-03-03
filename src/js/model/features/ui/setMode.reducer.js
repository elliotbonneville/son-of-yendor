const modes = [
    'absorb',
    'wall',
    'floor',
    'item',
    'trap',
];

export default (state = {}, { mode }) => (
    modes.contains(mode) ? { ...state, mode } : state
);

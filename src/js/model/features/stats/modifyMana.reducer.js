export default (stats, { amount }) => ({
    ...stats,
    mana: stats.mana + amount,
});

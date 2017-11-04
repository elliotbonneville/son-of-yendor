(() => {
function randomRange(range) {
    return Math.round(Math.random() * range);
}

function randomDirection() {
    const x = randomRange(2) - 1;
    const y = randomRange(2) - 1;
    return { x, y };
}

window.Math2 = { randomRange, randomDirection };
})();

export function randomRange(range) {
    return Math.round(Math.random() * range);
}

export function randomDirection() {
    const x = randomRange(2) - 1;
    const y = randomRange(2) - 1;
    return { x, y };
}

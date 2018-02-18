export function randomRange(floor, ceiling) {
    return floor + Math.round(Math.random() * (ceiling - floor));
}

export function randomDirection() {
    const x = randomRange(2) - 1;
    const y = randomRange(2) - 1;
    return { x, y };
}

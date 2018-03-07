export function randomRange(floor, ceiling) {
    return floor + Math.round(Math.random() * (ceiling - floor));
}

export function randomDirection() {
    return {
        x: randomRange(-1, 1),
        y: randomRange(-1, 1),
    };
}

export function chebyshevDistance(a, b) {
    const dx = Math.abs(b.x - a.x);
    const dy = Math.abs(b.y - a.y);
    return Math.max(dx, dy);
}

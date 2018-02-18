export function randomRange(floor, ceiling) {
    return floor + Math.round(Math.random() * (ceiling - floor));
}

export function randomDirection() {
    return {
        x: randomRange(-1, 1),
        y: randomRange(-1, 1),
    };
}

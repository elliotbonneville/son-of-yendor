export default (a, b) => {
    if (!a || !b) return Infinity;

    const { x: ax, y: ay } = a;
    const { x: bx, y: by } = b;

    return Math.max(Math.abs(ax - bx), Math.abs(ay - by));
}

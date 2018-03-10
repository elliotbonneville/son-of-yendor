export default (a, b) => {
    if (!a || !b) return false;
    const { x: ax, y: ay } = a;
    const { x: bx, y: by } = b;
    return ax == bx && ay == by;
}

export default (a, b) => {
    const { x: ax, y: ay } = a;
    const { x: bx, y: by } = b;
    return ax == bx && ay == by;
}

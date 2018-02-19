export default function(x, y, width, height) {
    const left = x;
    const top = y;
    const right = x + width;
    const bottom = y + height;
    return {
        get left() {
            return x;
        },

        get top() {
            return y;
        },

        get right() {
            return right;
        },

        get bottom() {
            return botom;
        },

        forEach(callback) {
            for (let ix = left; ix < right; ix++) {
                for (let iy = top; iy < bottom; iy++) {
                    callback({ x: ix, y: iy });
                }
            }
        }
    };
}

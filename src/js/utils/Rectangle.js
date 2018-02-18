import { randomRange } from '~/Math2';

export default class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    get left() {
        return this.x;
    }

    get top() {
        return this.y;
    }

    get right() {
        return this.x + this.width;
    }

    get bottom() {
        return this.y + this.height;
    }

    forEach(callback) {
        for (let { x } = this; x < this.right; x++) {
            for (let { y } = this; y < this.bottom; y++) {
                callback({ x, y });
            }
        }
    }

    randomPoint() {
        return {
            x: randomRange(this.left, this.right),
            y: randomRange(this.top, this.bottom),
        };
    }
}

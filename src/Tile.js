(() => {
const tileTypes = {
    'floor': {
        char: '.',
        fgColor: 'white',
        bgColor: 'black',
        passable: true,
        opaque: false,
    },
    'wall': {
        char: '#',
        fgColor: 'white',
        bgColor: 'black',
        passable: false,
        opaque: true,
    },
};

class Tile extends window.GameObject {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }

    set type(_type) {
        this._type = _type;
        Object.assign(this, tileTypes[_type]);
    }

    get type() {
        return this._type;
    }
}

window.Tile = Tile;
})();

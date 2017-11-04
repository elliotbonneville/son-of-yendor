(() => {
const tileTypes = {
    'floor': {
        char: '.',
        fgColor: 'white',
        bgColor: 'black',
        walkable: true,
    },
    'wall': {
        char: '#',
        fgColor: 'white',
        bgColor: 'black',
        walkable: false,
    },
};

class Tile extends window.GameObject {
    constructor(level, x, y, type) {
        super();
        this.addComponents([
            new window.LocationComponent(this, level, x, y),
            new window.RendererComponent(this),
            new window.ColliderComponent(this),
        ]);
        this.type = type;
    }

    set type(_type) {
        this._type = _type;
        const { char, fgColor, bgColor, walkable } = tileTypes[_type];
        Object.assign(
            this.getComponent(window.RendererComponent),
            { char, fgColor, bgColor },
        );
        Object.assign(
            this.getComponent(window.ColliderComponent),
            { enabled: !walkable },
        );
        this.update();
    }

    get type() {
        return this._type;
    }
}

window.Tile = Tile;
})();

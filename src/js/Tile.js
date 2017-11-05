import GameObject from '~/GameObject';
import Location from '~/components/LocationComponent';
import Renderer from '~/components/RendererComponent';
import Collider from '~/components/ColliderComponent';

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

export default class Tile extends GameObject {
    constructor(level, x, y, type) {
        super();
        this.addComponents([
            new Location(this, level, x, y),
            new Renderer(this),
            new Collider(this),
        ]);
        this.type = type;
    }

    set type(_type) {
        this._type = _type;
        const { char, fgColor, bgColor, walkable } = tileTypes[_type];
        Object.assign(
            this.getComponent(Renderer),
            { char, fgColor, bgColor },
        );
        Object.assign(
            this.getComponent(Collider),
            { enabled: !walkable },
        );
        this.update();
    }

    get type() {
        return this._type;
    }
}

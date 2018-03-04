import requiredProp from '~/utils/requiredProp';

export default class Cell {
    constructor({
        character = requiredProp('character'),
        foregroundColor = requiredProp('foregroundColor'),
        backgroundColor  = requiredProp('backgroundColor'),
    }) {
        this.character = character;
        this.foregroundColor = foregroundColor;
        this.backgroundColor = backgroundColor;
    }
}

import requiredProp from '~/utils/requiredProp';

export default class Cell {
    constructor({
        character = requiredProp('character'),
        foregroundColor = 'white',
        backgroundColor = 'black',
    }) {
        this.character = character;
        this.foregroundColor = foregroundColor;
        this.backgroundColor = backgroundColor;
    }
}

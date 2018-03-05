import requiredProp from '~/utils/requiredProp';

export default class Cell {
    constructor({
        character,
        foregroundColor,
        backgroundColor,
    }) {
        this.character = character;
        this.foregroundColor = foregroundColor;
        this.backgroundColor = backgroundColor;
    }
}

export const emptyCell = new Cell({ character: ' ' });

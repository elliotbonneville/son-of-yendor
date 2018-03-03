import requiredProp from '~/utils/requiredProp';
import drawCell from '~/renderer/drawCell';

import actorDefinitions from '~/data/entities/actors/index';

export default function drawActor({
    cells = requiredProp('cells'),
    actor = requiredProp('actor'),
}) { 
    const { x, y } = actor.position;
    const {
        character,
        foregroundColor,
        backgroundColor,
    } = actorDefinitions[actor.type].metadata;

    drawCell({
        backgroundColor,
        cells,
        character,
        foregroundColor,
        x,
        y: Number(y) + 2,
    });
}

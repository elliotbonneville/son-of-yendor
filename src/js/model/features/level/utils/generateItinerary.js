import seedRandom from 'seedrandom';

import cellKey from '~/utils/cellKey';

import { MAP_WIDTH, MAP_HEIGHT } from '~/constants';
import { itineraryLength } from '~/model/constants';

export default function (actorId) {
    const rng = seedRandom(actorId);
    const itinerary = [];

    for (let i = 0; i < itineraryLength; i++) {
        itinerary.push({
            position: cellKey({
                x: Math.ceil(rng() * (MAP_WIDTH - 3)) + 2,
                y: Math.ceil(rng() * (MAP_HEIGHT - 3)) + 2,
            }),
            interestLevel: -15,
        });
    }

    return itinerary;
}

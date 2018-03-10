import { MARK_ITINERARY } from './types';

export default ({ actorId, position }) => ({
    type: MARK_ITINERARY,
    actorId,
    position,
});

import { default as level } from '~/model/features/level';
import { default as ui } from '~/model/features/ui';
import { default as actors } from '~/model/features/actors';
import { default as time } from '~/model/features/time';
import { default as items } from '~/model/features/items';
import { default as traps } from '~/model/features/traps';
import { default as stats } from '~/model/features/stats';
import { default as status } from '~/model/features/status';

export const reducers = {
    level,
    ui,
    actors,
    time,
    items,
    stats,
    traps,
    status,
};

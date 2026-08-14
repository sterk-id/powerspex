import * as migration_20260814_135408_initial_schema from './20260814_135408_initial_schema';
import * as migration_20260814_135422_add_related_services from './20260814_135422_add_related_services';

export const migrations = [
  {
    up: migration_20260814_135408_initial_schema.up,
    down: migration_20260814_135408_initial_schema.down,
    name: '20260814_135408_initial_schema',
  },
  {
    up: migration_20260814_135422_add_related_services.up,
    down: migration_20260814_135422_add_related_services.down,
    name: '20260814_135422_add_related_services'
  },
];

import * as migration_20260814_135408_initial_schema from './20260814_135408_initial_schema';
import * as migration_20260814_135422_add_related_services from './20260814_135422_add_related_services';
import * as migration_20260814_143719_add_service_capability_headings from './20260814_143719_add_service_capability_headings';
import * as migration_20260816_185623_add_expertise_detail_fields from './20260816_185623_add_expertise_detail_fields';
import * as migration_20260816_195925_add_project_detail_fields from './20260816_195925_add_project_detail_fields';
import * as migration_20260816_211226_add_project_metadata from './20260816_211226_add_project_metadata';

export const migrations = [
  {
    up: migration_20260814_135408_initial_schema.up,
    down: migration_20260814_135408_initial_schema.down,
    name: '20260814_135408_initial_schema',
  },
  {
    up: migration_20260814_135422_add_related_services.up,
    down: migration_20260814_135422_add_related_services.down,
    name: '20260814_135422_add_related_services',
  },
  {
    up: migration_20260814_143719_add_service_capability_headings.up,
    down: migration_20260814_143719_add_service_capability_headings.down,
    name: '20260814_143719_add_service_capability_headings',
  },
  {
    up: migration_20260816_185623_add_expertise_detail_fields.up,
    down: migration_20260816_185623_add_expertise_detail_fields.down,
    name: '20260816_185623_add_expertise_detail_fields',
  },
  {
    up: migration_20260816_195925_add_project_detail_fields.up,
    down: migration_20260816_195925_add_project_detail_fields.down,
    name: '20260816_195925_add_project_detail_fields',
  },
  {
    up: migration_20260816_211226_add_project_metadata.up,
    down: migration_20260816_211226_add_project_metadata.down,
    name: '20260816_211226_add_project_metadata'
  },
];

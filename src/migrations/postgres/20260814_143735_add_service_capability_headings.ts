import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "services" ADD COLUMN "capabilities_eyebrow" varchar;
    ALTER TABLE "services" ADD COLUMN "capabilities_title" varchar;
    ALTER TABLE "_services_v" ADD COLUMN "version_capabilities_eyebrow" varchar;
    ALTER TABLE "_services_v" ADD COLUMN "version_capabilities_title" varchar;
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "services" DROP COLUMN "capabilities_eyebrow";
    ALTER TABLE "services" DROP COLUMN "capabilities_title";
    ALTER TABLE "_services_v" DROP COLUMN "version_capabilities_eyebrow";
    ALTER TABLE "_services_v" DROP COLUMN "version_capabilities_title";
  `)
}

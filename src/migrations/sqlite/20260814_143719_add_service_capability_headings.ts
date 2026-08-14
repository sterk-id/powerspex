import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`services\` ADD \`capabilities_eyebrow\` text;`)
  await db.run(sql`ALTER TABLE \`services\` ADD \`capabilities_title\` text;`)
  await db.run(sql`ALTER TABLE \`_services_v\` ADD \`version_capabilities_eyebrow\` text;`)
  await db.run(sql`ALTER TABLE \`_services_v\` ADD \`version_capabilities_title\` text;`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`services\` DROP COLUMN \`capabilities_eyebrow\`;`)
  await db.run(sql`ALTER TABLE \`services\` DROP COLUMN \`capabilities_title\`;`)
  await db.run(sql`ALTER TABLE \`_services_v\` DROP COLUMN \`version_capabilities_eyebrow\`;`)
  await db.run(sql`ALTER TABLE \`_services_v\` DROP COLUMN \`version_capabilities_title\`;`)
}

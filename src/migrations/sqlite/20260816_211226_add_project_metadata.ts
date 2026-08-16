import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`projects_partners\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`role\` text,
  	\`is_public\` integer DEFAULT false,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`projects_partners_order_idx\` ON \`projects_partners\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`projects_partners_parent_id_idx\` ON \`projects_partners\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`projects_editorial_sources\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text,
  	\`url\` text,
  	\`note\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`projects_editorial_sources_order_idx\` ON \`projects_editorial_sources\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`projects_editorial_sources_parent_id_idx\` ON \`projects_editorial_sources\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_projects_v_version_partners\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`role\` text,
  	\`is_public\` integer DEFAULT false,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_projects_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_projects_v_version_partners_order_idx\` ON \`_projects_v_version_partners\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_projects_v_version_partners_parent_id_idx\` ON \`_projects_v_version_partners\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_projects_v_version_editorial_sources\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`label\` text,
  	\`url\` text,
  	\`note\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_projects_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_projects_v_version_editorial_sources_order_idx\` ON \`_projects_v_version_editorial_sources\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_projects_v_version_editorial_sources_parent_id_idx\` ON \`_projects_v_version_editorial_sources\` (\`_parent_id\`);`)
  await db.run(sql`ALTER TABLE \`projects\` ADD \`end_client\` text;`)
  await db.run(sql`ALTER TABLE \`projects\` ADD \`end_client_is_public\` integer DEFAULT false;`)
  await db.run(sql`ALTER TABLE \`projects\` ADD \`location\` text;`)
  await db.run(sql`ALTER TABLE \`projects\` ADD \`location_is_public\` integer DEFAULT false;`)
  await db.run(sql`ALTER TABLE \`projects\` ADD \`editorial_verified_at\` text;`)
  await db.run(sql`ALTER TABLE \`projects\` ADD \`editorial_content_approved\` integer DEFAULT false;`)
  await db.run(sql`ALTER TABLE \`projects\` ADD \`editorial_media_status\` text DEFAULT 'unknown';`)
  await db.run(sql`ALTER TABLE \`projects\` ADD \`editorial_media_credit\` text;`)
  await db.run(sql`ALTER TABLE \`_projects_v\` ADD \`version_end_client\` text;`)
  await db.run(sql`ALTER TABLE \`_projects_v\` ADD \`version_end_client_is_public\` integer DEFAULT false;`)
  await db.run(sql`ALTER TABLE \`_projects_v\` ADD \`version_location\` text;`)
  await db.run(sql`ALTER TABLE \`_projects_v\` ADD \`version_location_is_public\` integer DEFAULT false;`)
  await db.run(sql`ALTER TABLE \`_projects_v\` ADD \`version_editorial_verified_at\` text;`)
  await db.run(sql`ALTER TABLE \`_projects_v\` ADD \`version_editorial_content_approved\` integer DEFAULT false;`)
  await db.run(sql`ALTER TABLE \`_projects_v\` ADD \`version_editorial_media_status\` text DEFAULT 'unknown';`)
  await db.run(sql`ALTER TABLE \`_projects_v\` ADD \`version_editorial_media_credit\` text;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`projects_partners\`;`)
  await db.run(sql`DROP TABLE \`projects_editorial_sources\`;`)
  await db.run(sql`DROP TABLE \`_projects_v_version_partners\`;`)
  await db.run(sql`DROP TABLE \`_projects_v_version_editorial_sources\`;`)
  await db.run(sql`ALTER TABLE \`projects\` DROP COLUMN \`end_client\`;`)
  await db.run(sql`ALTER TABLE \`projects\` DROP COLUMN \`end_client_is_public\`;`)
  await db.run(sql`ALTER TABLE \`projects\` DROP COLUMN \`location\`;`)
  await db.run(sql`ALTER TABLE \`projects\` DROP COLUMN \`location_is_public\`;`)
  await db.run(sql`ALTER TABLE \`projects\` DROP COLUMN \`editorial_verified_at\`;`)
  await db.run(sql`ALTER TABLE \`projects\` DROP COLUMN \`editorial_content_approved\`;`)
  await db.run(sql`ALTER TABLE \`projects\` DROP COLUMN \`editorial_media_status\`;`)
  await db.run(sql`ALTER TABLE \`projects\` DROP COLUMN \`editorial_media_credit\`;`)
  await db.run(sql`ALTER TABLE \`_projects_v\` DROP COLUMN \`version_end_client\`;`)
  await db.run(sql`ALTER TABLE \`_projects_v\` DROP COLUMN \`version_end_client_is_public\`;`)
  await db.run(sql`ALTER TABLE \`_projects_v\` DROP COLUMN \`version_location\`;`)
  await db.run(sql`ALTER TABLE \`_projects_v\` DROP COLUMN \`version_location_is_public\`;`)
  await db.run(sql`ALTER TABLE \`_projects_v\` DROP COLUMN \`version_editorial_verified_at\`;`)
  await db.run(sql`ALTER TABLE \`_projects_v\` DROP COLUMN \`version_editorial_content_approved\`;`)
  await db.run(sql`ALTER TABLE \`_projects_v\` DROP COLUMN \`version_editorial_media_status\`;`)
  await db.run(sql`ALTER TABLE \`_projects_v\` DROP COLUMN \`version_editorial_media_credit\`;`)
}

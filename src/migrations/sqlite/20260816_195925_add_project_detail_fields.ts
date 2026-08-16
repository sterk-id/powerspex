import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`projects_content_sections\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text,
  	\`title\` text,
  	\`body\` text,
  	\`image_id\` integer,
  	\`layout\` text DEFAULT 'right',
  	\`theme\` text DEFAULT 'light',
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`projects_content_sections_order_idx\` ON \`projects_content_sections\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`projects_content_sections_parent_id_idx\` ON \`projects_content_sections\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`projects_content_sections_image_idx\` ON \`projects_content_sections\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`projects_gallery\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`caption\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`projects_gallery_order_idx\` ON \`projects_gallery\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`projects_gallery_parent_id_idx\` ON \`projects_gallery\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`projects_gallery_image_idx\` ON \`projects_gallery\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_projects_v_version_content_sections\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`eyebrow\` text,
  	\`title\` text,
  	\`body\` text,
  	\`image_id\` integer,
  	\`layout\` text DEFAULT 'right',
  	\`theme\` text DEFAULT 'light',
  	\`_uuid\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_projects_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_projects_v_version_content_sections_order_idx\` ON \`_projects_v_version_content_sections\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_projects_v_version_content_sections_parent_id_idx\` ON \`_projects_v_version_content_sections\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_projects_v_version_content_sections_image_idx\` ON \`_projects_v_version_content_sections\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_projects_v_version_gallery\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`caption\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_projects_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_projects_v_version_gallery_order_idx\` ON \`_projects_v_version_gallery\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_projects_v_version_gallery_parent_id_idx\` ON \`_projects_v_version_gallery\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_projects_v_version_gallery_image_idx\` ON \`_projects_v_version_gallery\` (\`image_id\`);`)
  await db.run(sql`ALTER TABLE \`projects\` ADD \`hero_eyebrow\` text;`)
  await db.run(sql`ALTER TABLE \`projects\` ADD \`hero_title\` text;`)
  await db.run(sql`ALTER TABLE \`projects\` ADD \`hero_intro\` text;`)
  await db.run(sql`ALTER TABLE \`projects\` ADD \`cta_title\` text;`)
  await db.run(sql`ALTER TABLE \`projects\` ADD \`cta_body\` text;`)
  await db.run(sql`ALTER TABLE \`projects\` ADD \`cta_button_label\` text;`)
  await db.run(sql`ALTER TABLE \`projects\` ADD \`cta_button_href\` text;`)
  await db.run(sql`ALTER TABLE \`projects\` ADD \`seo_meta_title\` text;`)
  await db.run(sql`ALTER TABLE \`projects\` ADD \`seo_meta_description\` text;`)
  await db.run(sql`ALTER TABLE \`projects\` ADD \`seo_open_graph_image_id\` integer REFERENCES media(id);`)
  await db.run(sql`CREATE INDEX \`projects_seo_seo_open_graph_image_idx\` ON \`projects\` (\`seo_open_graph_image_id\`);`)
  await db.run(sql`ALTER TABLE \`_projects_v\` ADD \`version_hero_eyebrow\` text;`)
  await db.run(sql`ALTER TABLE \`_projects_v\` ADD \`version_hero_title\` text;`)
  await db.run(sql`ALTER TABLE \`_projects_v\` ADD \`version_hero_intro\` text;`)
  await db.run(sql`ALTER TABLE \`_projects_v\` ADD \`version_cta_title\` text;`)
  await db.run(sql`ALTER TABLE \`_projects_v\` ADD \`version_cta_body\` text;`)
  await db.run(sql`ALTER TABLE \`_projects_v\` ADD \`version_cta_button_label\` text;`)
  await db.run(sql`ALTER TABLE \`_projects_v\` ADD \`version_cta_button_href\` text;`)
  await db.run(sql`ALTER TABLE \`_projects_v\` ADD \`version_seo_meta_title\` text;`)
  await db.run(sql`ALTER TABLE \`_projects_v\` ADD \`version_seo_meta_description\` text;`)
  await db.run(sql`ALTER TABLE \`_projects_v\` ADD \`version_seo_open_graph_image_id\` integer REFERENCES media(id);`)
  await db.run(sql`CREATE INDEX \`_projects_v_version_seo_version_seo_open_graph_image_idx\` ON \`_projects_v\` (\`version_seo_open_graph_image_id\`);`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`projects_content_sections\`;`)
  await db.run(sql`DROP TABLE \`projects_gallery\`;`)
  await db.run(sql`DROP TABLE \`_projects_v_version_content_sections\`;`)
  await db.run(sql`DROP TABLE \`_projects_v_version_gallery\`;`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_projects\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`slug\` text,
  	\`client\` text,
  	\`client_is_public\` integer DEFAULT false,
  	\`sector\` text,
  	\`year\` numeric,
  	\`period\` text,
  	\`summary\` text,
  	\`featured_image_id\` integer,
  	\`featured\` integer DEFAULT false,
  	\`featured_order\` numeric,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`_status\` text DEFAULT 'draft',
  	FOREIGN KEY (\`featured_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`INSERT INTO \`__new_projects\`("id", "title", "slug", "client", "client_is_public", "sector", "year", "period", "summary", "featured_image_id", "featured", "featured_order", "updated_at", "created_at", "_status") SELECT "id", "title", "slug", "client", "client_is_public", "sector", "year", "period", "summary", "featured_image_id", "featured", "featured_order", "updated_at", "created_at", "_status" FROM \`projects\`;`)
  await db.run(sql`DROP TABLE \`projects\`;`)
  await db.run(sql`ALTER TABLE \`__new_projects\` RENAME TO \`projects\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE UNIQUE INDEX \`projects_slug_idx\` ON \`projects\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`projects_featured_image_idx\` ON \`projects\` (\`featured_image_id\`);`)
  await db.run(sql`CREATE INDEX \`projects_updated_at_idx\` ON \`projects\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`projects_created_at_idx\` ON \`projects\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`projects__status_idx\` ON \`projects\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`__new__projects_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_title\` text,
  	\`version_slug\` text,
  	\`version_client\` text,
  	\`version_client_is_public\` integer DEFAULT false,
  	\`version_sector\` text,
  	\`version_year\` numeric,
  	\`version_period\` text,
  	\`version_summary\` text,
  	\`version_featured_image_id\` integer,
  	\`version_featured\` integer DEFAULT false,
  	\`version_featured_order\` numeric,
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`version__status\` text DEFAULT 'draft',
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`latest\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_featured_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`INSERT INTO \`__new__projects_v\`("id", "parent_id", "version_title", "version_slug", "version_client", "version_client_is_public", "version_sector", "version_year", "version_period", "version_summary", "version_featured_image_id", "version_featured", "version_featured_order", "version_updated_at", "version_created_at", "version__status", "created_at", "updated_at", "latest") SELECT "id", "parent_id", "version_title", "version_slug", "version_client", "version_client_is_public", "version_sector", "version_year", "version_period", "version_summary", "version_featured_image_id", "version_featured", "version_featured_order", "version_updated_at", "version_created_at", "version__status", "created_at", "updated_at", "latest" FROM \`_projects_v\`;`)
  await db.run(sql`DROP TABLE \`_projects_v\`;`)
  await db.run(sql`ALTER TABLE \`__new__projects_v\` RENAME TO \`_projects_v\`;`)
  await db.run(sql`CREATE INDEX \`_projects_v_parent_idx\` ON \`_projects_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_projects_v_version_version_slug_idx\` ON \`_projects_v\` (\`version_slug\`);`)
  await db.run(sql`CREATE INDEX \`_projects_v_version_version_featured_image_idx\` ON \`_projects_v\` (\`version_featured_image_id\`);`)
  await db.run(sql`CREATE INDEX \`_projects_v_version_version_updated_at_idx\` ON \`_projects_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_projects_v_version_version_created_at_idx\` ON \`_projects_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_projects_v_version_version__status_idx\` ON \`_projects_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_projects_v_created_at_idx\` ON \`_projects_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_projects_v_updated_at_idx\` ON \`_projects_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_projects_v_latest_idx\` ON \`_projects_v\` (\`latest\`);`)
}

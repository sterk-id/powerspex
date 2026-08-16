import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`expertise_topics\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`id\` text PRIMARY KEY NOT NULL,
	\`title\` text,
	\`description\` text,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`expertise\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`expertise_topics_order_idx\` ON \`expertise_topics\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`expertise_topics_parent_id_idx\` ON \`expertise_topics\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`expertise_content_sections\` (
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
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`expertise\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`expertise_content_sections_order_idx\` ON \`expertise_content_sections\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`expertise_content_sections_parent_id_idx\` ON \`expertise_content_sections\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`expertise_content_sections_image_idx\` ON \`expertise_content_sections\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`expertise_standards\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`id\` text PRIMARY KEY NOT NULL,
	\`name\` text,
	\`type\` text,
	\`description\` text,
	\`validated\` integer DEFAULT false,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`expertise\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`expertise_standards_order_idx\` ON \`expertise_standards\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`expertise_standards_parent_id_idx\` ON \`expertise_standards\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`expertise_process\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`id\` text PRIMARY KEY NOT NULL,
	\`number\` text,
	\`title\` text,
	\`description\` text,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`expertise\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`expertise_process_order_idx\` ON \`expertise_process\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`expertise_process_parent_id_idx\` ON \`expertise_process\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`expertise_faq\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`id\` text PRIMARY KEY NOT NULL,
	\`question\` text,
	\`answer\` text,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`expertise\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`expertise_faq_order_idx\` ON \`expertise_faq\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`expertise_faq_parent_id_idx\` ON \`expertise_faq\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_expertise_v_version_topics\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`id\` integer PRIMARY KEY NOT NULL,
	\`title\` text,
	\`description\` text,
	\`_uuid\` text,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_expertise_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_expertise_v_version_topics_order_idx\` ON \`_expertise_v_version_topics\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_expertise_v_version_topics_parent_id_idx\` ON \`_expertise_v_version_topics\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_expertise_v_version_content_sections\` (
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
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_expertise_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_expertise_v_version_content_sections_order_idx\` ON \`_expertise_v_version_content_sections\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_expertise_v_version_content_sections_parent_id_idx\` ON \`_expertise_v_version_content_sections\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_expertise_v_version_content_sections_image_idx\` ON \`_expertise_v_version_content_sections\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_expertise_v_version_standards\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`id\` integer PRIMARY KEY NOT NULL,
	\`name\` text,
	\`type\` text,
	\`description\` text,
	\`validated\` integer DEFAULT false,
	\`_uuid\` text,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_expertise_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_expertise_v_version_standards_order_idx\` ON \`_expertise_v_version_standards\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_expertise_v_version_standards_parent_id_idx\` ON \`_expertise_v_version_standards\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_expertise_v_version_process\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`id\` integer PRIMARY KEY NOT NULL,
	\`number\` text,
	\`title\` text,
	\`description\` text,
	\`_uuid\` text,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_expertise_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_expertise_v_version_process_order_idx\` ON \`_expertise_v_version_process\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_expertise_v_version_process_parent_id_idx\` ON \`_expertise_v_version_process\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_expertise_v_version_faq\` (
	\`_order\` integer NOT NULL,
	\`_parent_id\` integer NOT NULL,
	\`id\` integer PRIMARY KEY NOT NULL,
	\`question\` text,
	\`answer\` text,
	\`_uuid\` text,
	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_expertise_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_expertise_v_version_faq_order_idx\` ON \`_expertise_v_version_faq\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_expertise_v_version_faq_parent_id_idx\` ON \`_expertise_v_version_faq\` (\`_parent_id\`);`)
  await db.run(sql`ALTER TABLE \`expertise\` ADD \`eyebrow\` text;`)
  await db.run(sql`ALTER TABLE \`expertise\` ADD \`hero_title\` text;`)
  await db.run(sql`ALTER TABLE \`expertise\` ADD \`hero_intro\` text;`)
  await db.run(sql`ALTER TABLE \`expertise\` ADD \`topics_eyebrow\` text;`)
  await db.run(sql`ALTER TABLE \`expertise\` ADD \`topics_title\` text;`)
  await db.run(sql`ALTER TABLE \`expertise\` ADD \`intro_title\` text;`)
  await db.run(sql`ALTER TABLE \`expertise\` ADD \`intro_body\` text;`)
  await db.run(sql`ALTER TABLE \`expertise\` ADD \`intro_image_id\` integer REFERENCES media(id);`)
  await db.run(sql`ALTER TABLE \`expertise\` ADD \`cta_title\` text;`)
  await db.run(sql`ALTER TABLE \`expertise\` ADD \`cta_body\` text;`)
  await db.run(sql`ALTER TABLE \`expertise\` ADD \`cta_button_label\` text;`)
  await db.run(sql`ALTER TABLE \`expertise\` ADD \`cta_button_href\` text;`)
  await db.run(sql`ALTER TABLE \`expertise\` ADD \`seo_meta_title\` text;`)
  await db.run(sql`ALTER TABLE \`expertise\` ADD \`seo_meta_description\` text;`)
  await db.run(sql`ALTER TABLE \`expertise\` ADD \`seo_open_graph_image_id\` integer REFERENCES media(id);`)
  await db.run(sql`CREATE INDEX \`expertise_intro_intro_image_idx\` ON \`expertise\` (\`intro_image_id\`);`)
  await db.run(sql`CREATE INDEX \`expertise_seo_seo_open_graph_image_idx\` ON \`expertise\` (\`seo_open_graph_image_id\`);`)
  await db.run(sql`ALTER TABLE \`expertise_rels\` ADD \`projects_id\` integer REFERENCES projects(id);`)
  await db.run(sql`CREATE INDEX \`expertise_rels_projects_id_idx\` ON \`expertise_rels\` (\`projects_id\`);`)
  await db.run(sql`ALTER TABLE \`_expertise_v\` ADD \`version_eyebrow\` text;`)
  await db.run(sql`ALTER TABLE \`_expertise_v\` ADD \`version_hero_title\` text;`)
  await db.run(sql`ALTER TABLE \`_expertise_v\` ADD \`version_hero_intro\` text;`)
  await db.run(sql`ALTER TABLE \`_expertise_v\` ADD \`version_topics_eyebrow\` text;`)
  await db.run(sql`ALTER TABLE \`_expertise_v\` ADD \`version_topics_title\` text;`)
  await db.run(sql`ALTER TABLE \`_expertise_v\` ADD \`version_intro_title\` text;`)
  await db.run(sql`ALTER TABLE \`_expertise_v\` ADD \`version_intro_body\` text;`)
  await db.run(sql`ALTER TABLE \`_expertise_v\` ADD \`version_intro_image_id\` integer REFERENCES media(id);`)
  await db.run(sql`ALTER TABLE \`_expertise_v\` ADD \`version_cta_title\` text;`)
  await db.run(sql`ALTER TABLE \`_expertise_v\` ADD \`version_cta_body\` text;`)
  await db.run(sql`ALTER TABLE \`_expertise_v\` ADD \`version_cta_button_label\` text;`)
  await db.run(sql`ALTER TABLE \`_expertise_v\` ADD \`version_cta_button_href\` text;`)
  await db.run(sql`ALTER TABLE \`_expertise_v\` ADD \`version_seo_meta_title\` text;`)
  await db.run(sql`ALTER TABLE \`_expertise_v\` ADD \`version_seo_meta_description\` text;`)
  await db.run(sql`ALTER TABLE \`_expertise_v\` ADD \`version_seo_open_graph_image_id\` integer REFERENCES media(id);`)
  await db.run(sql`CREATE INDEX \`_expertise_v_version_intro_version_intro_image_idx\` ON \`_expertise_v\` (\`version_intro_image_id\`);`)
  await db.run(sql`CREATE INDEX \`_expertise_v_version_seo_version_seo_open_graph_image_idx\` ON \`_expertise_v\` (\`version_seo_open_graph_image_id\`);`)
  await db.run(sql`ALTER TABLE \`_expertise_v_rels\` ADD \`projects_id\` integer REFERENCES projects(id);`)
  await db.run(sql`CREATE INDEX \`_expertise_v_rels_projects_id_idx\` ON \`_expertise_v_rels\` (\`projects_id\`);`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`expertise_topics\`;`)
  await db.run(sql`DROP TABLE \`expertise_content_sections\`;`)
  await db.run(sql`DROP TABLE \`expertise_standards\`;`)
  await db.run(sql`DROP TABLE \`expertise_process\`;`)
  await db.run(sql`DROP TABLE \`expertise_faq\`;`)
  await db.run(sql`DROP TABLE \`_expertise_v_version_topics\`;`)
  await db.run(sql`DROP TABLE \`_expertise_v_version_content_sections\`;`)
  await db.run(sql`DROP TABLE \`_expertise_v_version_standards\`;`)
  await db.run(sql`DROP TABLE \`_expertise_v_version_process\`;`)
  await db.run(sql`DROP TABLE \`_expertise_v_version_faq\`;`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_expertise\` (
	\`id\` integer PRIMARY KEY NOT NULL,
	\`title\` text,
	\`slug\` text,
	\`summary\` text,
	\`hero_image_id\` integer,
	\`navigation_order\` numeric DEFAULT 0,
	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	\`_status\` text DEFAULT 'draft',
	FOREIGN KEY (\`hero_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`INSERT INTO \`__new_expertise\`("id", "title", "slug", "summary", "hero_image_id", "navigation_order", "updated_at", "created_at", "_status") SELECT "id", "title", "slug", "summary", "hero_image_id", "navigation_order", "updated_at", "created_at", "_status" FROM \`expertise\`;`)
  await db.run(sql`DROP TABLE \`expertise\`;`)
  await db.run(sql`ALTER TABLE \`__new_expertise\` RENAME TO \`expertise\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE UNIQUE INDEX \`expertise_slug_idx\` ON \`expertise\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`expertise_hero_image_idx\` ON \`expertise\` (\`hero_image_id\`);`)
  await db.run(sql`CREATE INDEX \`expertise_updated_at_idx\` ON \`expertise\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`expertise_created_at_idx\` ON \`expertise\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`expertise__status_idx\` ON \`expertise\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`__new_expertise_rels\` (
	\`id\` integer PRIMARY KEY NOT NULL,
	\`order\` integer,
	\`parent_id\` integer NOT NULL,
	\`path\` text NOT NULL,
	\`services_id\` integer,
	FOREIGN KEY (\`parent_id\`) REFERENCES \`expertise\`(\`id\`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (\`services_id\`) REFERENCES \`services\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_expertise_rels\`("id", "order", "parent_id", "path", "services_id") SELECT "id", "order", "parent_id", "path", "services_id" FROM \`expertise_rels\`;`)
  await db.run(sql`DROP TABLE \`expertise_rels\`;`)
  await db.run(sql`ALTER TABLE \`__new_expertise_rels\` RENAME TO \`expertise_rels\`;`)
  await db.run(sql`CREATE INDEX \`expertise_rels_order_idx\` ON \`expertise_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`expertise_rels_parent_idx\` ON \`expertise_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`expertise_rels_path_idx\` ON \`expertise_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`expertise_rels_services_id_idx\` ON \`expertise_rels\` (\`services_id\`);`)
  await db.run(sql`CREATE TABLE \`__new__expertise_v\` (
	\`id\` integer PRIMARY KEY NOT NULL,
	\`parent_id\` integer,
	\`version_title\` text,
	\`version_slug\` text,
	\`version_summary\` text,
	\`version_hero_image_id\` integer,
	\`version_navigation_order\` numeric DEFAULT 0,
	\`version_updated_at\` text,
	\`version_created_at\` text,
	\`version__status\` text DEFAULT 'draft',
	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	\`latest\` integer,
	FOREIGN KEY (\`parent_id\`) REFERENCES \`expertise\`(\`id\`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (\`version_hero_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`INSERT INTO \`__new__expertise_v\`("id", "parent_id", "version_title", "version_slug", "version_summary", "version_hero_image_id", "version_navigation_order", "version_updated_at", "version_created_at", "version__status", "created_at", "updated_at", "latest") SELECT "id", "parent_id", "version_title", "version_slug", "version_summary", "version_hero_image_id", "version_navigation_order", "version_updated_at", "version_created_at", "version__status", "created_at", "updated_at", "latest" FROM \`_expertise_v\`;`)
  await db.run(sql`DROP TABLE \`_expertise_v\`;`)
  await db.run(sql`ALTER TABLE \`__new__expertise_v\` RENAME TO \`_expertise_v\`;`)
  await db.run(sql`CREATE INDEX \`_expertise_v_parent_idx\` ON \`_expertise_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_expertise_v_version_version_slug_idx\` ON \`_expertise_v\` (\`version_slug\`);`)
  await db.run(sql`CREATE INDEX \`_expertise_v_version_version_hero_image_idx\` ON \`_expertise_v\` (\`version_hero_image_id\`);`)
  await db.run(sql`CREATE INDEX \`_expertise_v_version_version_updated_at_idx\` ON \`_expertise_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_expertise_v_version_version_created_at_idx\` ON \`_expertise_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_expertise_v_version_version__status_idx\` ON \`_expertise_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_expertise_v_created_at_idx\` ON \`_expertise_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_expertise_v_updated_at_idx\` ON \`_expertise_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_expertise_v_latest_idx\` ON \`_expertise_v\` (\`latest\`);`)
  await db.run(sql`CREATE TABLE \`__new__expertise_v_rels\` (
	\`id\` integer PRIMARY KEY NOT NULL,
	\`order\` integer,
	\`parent_id\` integer NOT NULL,
	\`path\` text NOT NULL,
	\`services_id\` integer,
	FOREIGN KEY (\`parent_id\`) REFERENCES \`_expertise_v\`(\`id\`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (\`services_id\`) REFERENCES \`services\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new__expertise_v_rels\`("id", "order", "parent_id", "path", "services_id") SELECT "id", "order", "parent_id", "path", "services_id" FROM \`_expertise_v_rels\`;`)
  await db.run(sql`DROP TABLE \`_expertise_v_rels\`;`)
  await db.run(sql`ALTER TABLE \`__new__expertise_v_rels\` RENAME TO \`_expertise_v_rels\`;`)
  await db.run(sql`CREATE INDEX \`_expertise_v_rels_order_idx\` ON \`_expertise_v_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`_expertise_v_rels_parent_idx\` ON \`_expertise_v_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_expertise_v_rels_path_idx\` ON \`_expertise_v_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`_expertise_v_rels_services_id_idx\` ON \`_expertise_v_rels\` (\`services_id\`);`)
}

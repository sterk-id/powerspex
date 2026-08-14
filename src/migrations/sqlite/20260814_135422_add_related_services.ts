import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`services_rels\` ADD \`services_id\` integer REFERENCES services(id);`)
  await db.run(sql`CREATE INDEX \`services_rels_services_id_idx\` ON \`services_rels\` (\`services_id\`);`)
  await db.run(sql`ALTER TABLE \`_services_v_rels\` ADD \`services_id\` integer REFERENCES services(id);`)
  await db.run(sql`CREATE INDEX \`_services_v_rels_services_id_idx\` ON \`_services_v_rels\` (\`services_id\`);`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_services_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`expertise_id\` integer,
  	\`projects_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`services\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`expertise_id\`) REFERENCES \`expertise\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`projects_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_services_rels\`("id", "order", "parent_id", "path", "expertise_id", "projects_id") SELECT "id", "order", "parent_id", "path", "expertise_id", "projects_id" FROM \`services_rels\`;`)
  await db.run(sql`DROP TABLE \`services_rels\`;`)
  await db.run(sql`ALTER TABLE \`__new_services_rels\` RENAME TO \`services_rels\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`services_rels_order_idx\` ON \`services_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`services_rels_parent_idx\` ON \`services_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`services_rels_path_idx\` ON \`services_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`services_rels_expertise_id_idx\` ON \`services_rels\` (\`expertise_id\`);`)
  await db.run(sql`CREATE INDEX \`services_rels_projects_id_idx\` ON \`services_rels\` (\`projects_id\`);`)
  await db.run(sql`CREATE TABLE \`__new__services_v_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`expertise_id\` integer,
  	\`projects_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`_services_v\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`expertise_id\`) REFERENCES \`expertise\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`projects_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new__services_v_rels\`("id", "order", "parent_id", "path", "expertise_id", "projects_id") SELECT "id", "order", "parent_id", "path", "expertise_id", "projects_id" FROM \`_services_v_rels\`;`)
  await db.run(sql`DROP TABLE \`_services_v_rels\`;`)
  await db.run(sql`ALTER TABLE \`__new__services_v_rels\` RENAME TO \`_services_v_rels\`;`)
  await db.run(sql`CREATE INDEX \`_services_v_rels_order_idx\` ON \`_services_v_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`_services_v_rels_parent_idx\` ON \`_services_v_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_services_v_rels_path_idx\` ON \`_services_v_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`_services_v_rels_expertise_id_idx\` ON \`_services_v_rels\` (\`expertise_id\`);`)
  await db.run(sql`CREATE INDEX \`_services_v_rels_projects_id_idx\` ON \`_services_v_rels\` (\`projects_id\`);`)
}

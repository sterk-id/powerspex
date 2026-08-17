import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_projects_editorial_media_status" AS ENUM('unknown', 'pending', 'approved', 'rejected');
  CREATE TYPE "public"."enum__projects_v_version_editorial_media_status" AS ENUM('unknown', 'pending', 'approved', 'rejected');
  CREATE TABLE "projects_partners" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar,
	"role" varchar,
	"is_public" boolean DEFAULT false
  );

  CREATE TABLE "projects_editorial_sources" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label" varchar,
	"url" varchar,
	"note" varchar
  );

  CREATE TABLE "_projects_v_version_partners" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"role" varchar,
	"is_public" boolean DEFAULT false,
	"_uuid" varchar
  );

  CREATE TABLE "_projects_v_version_editorial_sources" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"label" varchar,
	"url" varchar,
	"note" varchar,
	"_uuid" varchar
  );

  ALTER TABLE "projects" ADD COLUMN "end_client" varchar;
  ALTER TABLE "projects" ADD COLUMN "end_client_is_public" boolean DEFAULT false;
  ALTER TABLE "projects" ADD COLUMN "location" varchar;
  ALTER TABLE "projects" ADD COLUMN "location_is_public" boolean DEFAULT false;
  ALTER TABLE "projects" ADD COLUMN "editorial_verified_at" timestamp(3) with time zone;
  ALTER TABLE "projects" ADD COLUMN "editorial_content_approved" boolean DEFAULT false;
  ALTER TABLE "projects" ADD COLUMN "editorial_media_status" "enum_projects_editorial_media_status" DEFAULT 'unknown';
  ALTER TABLE "projects" ADD COLUMN "editorial_media_credit" varchar;
  ALTER TABLE "_projects_v" ADD COLUMN "version_end_client" varchar;
  ALTER TABLE "_projects_v" ADD COLUMN "version_end_client_is_public" boolean DEFAULT false;
  ALTER TABLE "_projects_v" ADD COLUMN "version_location" varchar;
  ALTER TABLE "_projects_v" ADD COLUMN "version_location_is_public" boolean DEFAULT false;
  ALTER TABLE "_projects_v" ADD COLUMN "version_editorial_verified_at" timestamp(3) with time zone;
  ALTER TABLE "_projects_v" ADD COLUMN "version_editorial_content_approved" boolean DEFAULT false;
  ALTER TABLE "_projects_v" ADD COLUMN "version_editorial_media_status" "enum__projects_v_version_editorial_media_status" DEFAULT 'unknown';
  ALTER TABLE "_projects_v" ADD COLUMN "version_editorial_media_credit" varchar;
  ALTER TABLE "projects_partners" ADD CONSTRAINT "projects_partners_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_editorial_sources" ADD CONSTRAINT "projects_editorial_sources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_version_partners" ADD CONSTRAINT "_projects_v_version_partners_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_version_editorial_sources" ADD CONSTRAINT "_projects_v_version_editorial_sources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "projects_partners_order_idx" ON "projects_partners" USING btree ("_order");
  CREATE INDEX "projects_partners_parent_id_idx" ON "projects_partners" USING btree ("_parent_id");
  CREATE INDEX "projects_editorial_sources_order_idx" ON "projects_editorial_sources" USING btree ("_order");
  CREATE INDEX "projects_editorial_sources_parent_id_idx" ON "projects_editorial_sources" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_version_partners_order_idx" ON "_projects_v_version_partners" USING btree ("_order");
  CREATE INDEX "_projects_v_version_partners_parent_id_idx" ON "_projects_v_version_partners" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_version_editorial_sources_order_idx" ON "_projects_v_version_editorial_sources" USING btree ("_order");
  CREATE INDEX "_projects_v_version_editorial_sources_parent_id_idx" ON "_projects_v_version_editorial_sources" USING btree ("_parent_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "projects_partners" CASCADE;
  DROP TABLE "projects_editorial_sources" CASCADE;
  DROP TABLE "_projects_v_version_partners" CASCADE;
  DROP TABLE "_projects_v_version_editorial_sources" CASCADE;
  ALTER TABLE "projects" DROP COLUMN "end_client";
  ALTER TABLE "projects" DROP COLUMN "end_client_is_public";
  ALTER TABLE "projects" DROP COLUMN "location";
  ALTER TABLE "projects" DROP COLUMN "location_is_public";
  ALTER TABLE "projects" DROP COLUMN "editorial_verified_at";
  ALTER TABLE "projects" DROP COLUMN "editorial_content_approved";
  ALTER TABLE "projects" DROP COLUMN "editorial_media_status";
  ALTER TABLE "projects" DROP COLUMN "editorial_media_credit";
  ALTER TABLE "_projects_v" DROP COLUMN "version_end_client";
  ALTER TABLE "_projects_v" DROP COLUMN "version_end_client_is_public";
  ALTER TABLE "_projects_v" DROP COLUMN "version_location";
  ALTER TABLE "_projects_v" DROP COLUMN "version_location_is_public";
  ALTER TABLE "_projects_v" DROP COLUMN "version_editorial_verified_at";
  ALTER TABLE "_projects_v" DROP COLUMN "version_editorial_content_approved";
  ALTER TABLE "_projects_v" DROP COLUMN "version_editorial_media_status";
  ALTER TABLE "_projects_v" DROP COLUMN "version_editorial_media_credit";
  DROP TYPE "public"."enum_projects_editorial_media_status";
  DROP TYPE "public"."enum__projects_v_version_editorial_media_status";`)
}

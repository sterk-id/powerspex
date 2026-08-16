import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_expertise_content_sections_layout" AS ENUM('right', 'left');
  CREATE TYPE "public"."enum_expertise_content_sections_theme" AS ENUM('light', 'mist', 'dark');
  CREATE TYPE "public"."enum_expertise_standards_type" AS ENUM('standard', 'certification', 'personal-certification', 'organisation-certification');
  CREATE TYPE "public"."enum__expertise_v_version_content_sections_layout" AS ENUM('right', 'left');
  CREATE TYPE "public"."enum__expertise_v_version_content_sections_theme" AS ENUM('light', 'mist', 'dark');
  CREATE TYPE "public"."enum__expertise_v_version_standards_type" AS ENUM('standard', 'certification', 'personal-certification', 'organisation-certification');
  CREATE TABLE "expertise_topics" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" varchar
  );

  CREATE TABLE "expertise_content_sections" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"eyebrow" varchar,
	"title" varchar,
	"body" varchar,
	"image_id" integer,
	"layout" "enum_expertise_content_sections_layout" DEFAULT 'right',
	"theme" "enum_expertise_content_sections_theme" DEFAULT 'light'
  );

  CREATE TABLE "expertise_standards" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar,
	"type" "enum_expertise_standards_type",
	"description" varchar,
	"validated" boolean DEFAULT false
  );

  CREATE TABLE "expertise_process" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"number" varchar,
	"title" varchar,
	"description" varchar
  );

  CREATE TABLE "expertise_faq" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"question" varchar,
	"answer" varchar
  );

  CREATE TABLE "_expertise_v_version_topics" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" varchar,
	"_uuid" varchar
  );

  CREATE TABLE "_expertise_v_version_content_sections" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"eyebrow" varchar,
	"title" varchar,
	"body" varchar,
	"image_id" integer,
	"layout" "enum__expertise_v_version_content_sections_layout" DEFAULT 'right',
	"theme" "enum__expertise_v_version_content_sections_theme" DEFAULT 'light',
	"_uuid" varchar
  );

  CREATE TABLE "_expertise_v_version_standards" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"type" "enum__expertise_v_version_standards_type",
	"description" varchar,
	"validated" boolean DEFAULT false,
	"_uuid" varchar
  );

  CREATE TABLE "_expertise_v_version_process" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"number" varchar,
	"title" varchar,
	"description" varchar,
	"_uuid" varchar
  );

  CREATE TABLE "_expertise_v_version_faq" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"question" varchar,
	"answer" varchar,
	"_uuid" varchar
  );

  ALTER TABLE "expertise" ADD COLUMN "eyebrow" varchar;
  ALTER TABLE "expertise" ADD COLUMN "hero_title" varchar;
  ALTER TABLE "expertise" ADD COLUMN "hero_intro" varchar;
  ALTER TABLE "expertise" ADD COLUMN "topics_eyebrow" varchar;
  ALTER TABLE "expertise" ADD COLUMN "topics_title" varchar;
  ALTER TABLE "expertise" ADD COLUMN "intro_title" varchar;
  ALTER TABLE "expertise" ADD COLUMN "intro_body" varchar;
  ALTER TABLE "expertise" ADD COLUMN "intro_image_id" integer;
  ALTER TABLE "expertise" ADD COLUMN "cta_title" varchar;
  ALTER TABLE "expertise" ADD COLUMN "cta_body" varchar;
  ALTER TABLE "expertise" ADD COLUMN "cta_button_label" varchar;
  ALTER TABLE "expertise" ADD COLUMN "cta_button_href" varchar;
  ALTER TABLE "expertise" ADD COLUMN "seo_meta_title" varchar;
  ALTER TABLE "expertise" ADD COLUMN "seo_meta_description" varchar;
  ALTER TABLE "expertise" ADD COLUMN "seo_open_graph_image_id" integer;
  ALTER TABLE "expertise_rels" ADD COLUMN "projects_id" integer;
  ALTER TABLE "_expertise_v" ADD COLUMN "version_eyebrow" varchar;
  ALTER TABLE "_expertise_v" ADD COLUMN "version_hero_title" varchar;
  ALTER TABLE "_expertise_v" ADD COLUMN "version_hero_intro" varchar;
  ALTER TABLE "_expertise_v" ADD COLUMN "version_topics_eyebrow" varchar;
  ALTER TABLE "_expertise_v" ADD COLUMN "version_topics_title" varchar;
  ALTER TABLE "_expertise_v" ADD COLUMN "version_intro_title" varchar;
  ALTER TABLE "_expertise_v" ADD COLUMN "version_intro_body" varchar;
  ALTER TABLE "_expertise_v" ADD COLUMN "version_intro_image_id" integer;
  ALTER TABLE "_expertise_v" ADD COLUMN "version_cta_title" varchar;
  ALTER TABLE "_expertise_v" ADD COLUMN "version_cta_body" varchar;
  ALTER TABLE "_expertise_v" ADD COLUMN "version_cta_button_label" varchar;
  ALTER TABLE "_expertise_v" ADD COLUMN "version_cta_button_href" varchar;
  ALTER TABLE "_expertise_v" ADD COLUMN "version_seo_meta_title" varchar;
  ALTER TABLE "_expertise_v" ADD COLUMN "version_seo_meta_description" varchar;
  ALTER TABLE "_expertise_v" ADD COLUMN "version_seo_open_graph_image_id" integer;
  ALTER TABLE "_expertise_v_rels" ADD COLUMN "projects_id" integer;
  ALTER TABLE "expertise_topics" ADD CONSTRAINT "expertise_topics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."expertise"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "expertise_content_sections" ADD CONSTRAINT "expertise_content_sections_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "expertise_content_sections" ADD CONSTRAINT "expertise_content_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."expertise"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "expertise_standards" ADD CONSTRAINT "expertise_standards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."expertise"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "expertise_process" ADD CONSTRAINT "expertise_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."expertise"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "expertise_faq" ADD CONSTRAINT "expertise_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."expertise"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_expertise_v_version_topics" ADD CONSTRAINT "_expertise_v_version_topics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_expertise_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_expertise_v_version_content_sections" ADD CONSTRAINT "_expertise_v_version_content_sections_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_expertise_v_version_content_sections" ADD CONSTRAINT "_expertise_v_version_content_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_expertise_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_expertise_v_version_standards" ADD CONSTRAINT "_expertise_v_version_standards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_expertise_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_expertise_v_version_process" ADD CONSTRAINT "_expertise_v_version_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_expertise_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_expertise_v_version_faq" ADD CONSTRAINT "_expertise_v_version_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_expertise_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "expertise_topics_order_idx" ON "expertise_topics" USING btree ("_order");
  CREATE INDEX "expertise_topics_parent_id_idx" ON "expertise_topics" USING btree ("_parent_id");
  CREATE INDEX "expertise_content_sections_order_idx" ON "expertise_content_sections" USING btree ("_order");
  CREATE INDEX "expertise_content_sections_parent_id_idx" ON "expertise_content_sections" USING btree ("_parent_id");
  CREATE INDEX "expertise_content_sections_image_idx" ON "expertise_content_sections" USING btree ("image_id");
  CREATE INDEX "expertise_standards_order_idx" ON "expertise_standards" USING btree ("_order");
  CREATE INDEX "expertise_standards_parent_id_idx" ON "expertise_standards" USING btree ("_parent_id");
  CREATE INDEX "expertise_process_order_idx" ON "expertise_process" USING btree ("_order");
  CREATE INDEX "expertise_process_parent_id_idx" ON "expertise_process" USING btree ("_parent_id");
  CREATE INDEX "expertise_faq_order_idx" ON "expertise_faq" USING btree ("_order");
  CREATE INDEX "expertise_faq_parent_id_idx" ON "expertise_faq" USING btree ("_parent_id");
  CREATE INDEX "_expertise_v_version_topics_order_idx" ON "_expertise_v_version_topics" USING btree ("_order");
  CREATE INDEX "_expertise_v_version_topics_parent_id_idx" ON "_expertise_v_version_topics" USING btree ("_parent_id");
  CREATE INDEX "_expertise_v_version_content_sections_order_idx" ON "_expertise_v_version_content_sections" USING btree ("_order");
  CREATE INDEX "_expertise_v_version_content_sections_parent_id_idx" ON "_expertise_v_version_content_sections" USING btree ("_parent_id");
  CREATE INDEX "_expertise_v_version_content_sections_image_idx" ON "_expertise_v_version_content_sections" USING btree ("image_id");
  CREATE INDEX "_expertise_v_version_standards_order_idx" ON "_expertise_v_version_standards" USING btree ("_order");
  CREATE INDEX "_expertise_v_version_standards_parent_id_idx" ON "_expertise_v_version_standards" USING btree ("_parent_id");
  CREATE INDEX "_expertise_v_version_process_order_idx" ON "_expertise_v_version_process" USING btree ("_order");
  CREATE INDEX "_expertise_v_version_process_parent_id_idx" ON "_expertise_v_version_process" USING btree ("_parent_id");
  CREATE INDEX "_expertise_v_version_faq_order_idx" ON "_expertise_v_version_faq" USING btree ("_order");
  CREATE INDEX "_expertise_v_version_faq_parent_id_idx" ON "_expertise_v_version_faq" USING btree ("_parent_id");
  ALTER TABLE "expertise" ADD CONSTRAINT "expertise_intro_image_id_media_id_fk" FOREIGN KEY ("intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "expertise" ADD CONSTRAINT "expertise_seo_open_graph_image_id_media_id_fk" FOREIGN KEY ("seo_open_graph_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "expertise_rels" ADD CONSTRAINT "expertise_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_expertise_v" ADD CONSTRAINT "_expertise_v_version_intro_image_id_media_id_fk" FOREIGN KEY ("version_intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_expertise_v" ADD CONSTRAINT "_expertise_v_version_seo_open_graph_image_id_media_id_fk" FOREIGN KEY ("version_seo_open_graph_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_expertise_v_rels" ADD CONSTRAINT "_expertise_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "expertise_intro_intro_image_idx" ON "expertise" USING btree ("intro_image_id");
  CREATE INDEX "expertise_seo_seo_open_graph_image_idx" ON "expertise" USING btree ("seo_open_graph_image_id");
  CREATE INDEX "expertise_rels_projects_id_idx" ON "expertise_rels" USING btree ("projects_id");
  CREATE INDEX "_expertise_v_version_intro_version_intro_image_idx" ON "_expertise_v" USING btree ("version_intro_image_id");
  CREATE INDEX "_expertise_v_version_seo_version_seo_open_graph_image_idx" ON "_expertise_v" USING btree ("version_seo_open_graph_image_id");
  CREATE INDEX "_expertise_v_rels_projects_id_idx" ON "_expertise_v_rels" USING btree ("projects_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "expertise_topics" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "expertise_content_sections" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "expertise_standards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "expertise_process" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "expertise_faq" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_expertise_v_version_topics" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_expertise_v_version_content_sections" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_expertise_v_version_standards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_expertise_v_version_process" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_expertise_v_version_faq" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "expertise_topics" CASCADE;
  DROP TABLE "expertise_content_sections" CASCADE;
  DROP TABLE "expertise_standards" CASCADE;
  DROP TABLE "expertise_process" CASCADE;
  DROP TABLE "expertise_faq" CASCADE;
  DROP TABLE "_expertise_v_version_topics" CASCADE;
  DROP TABLE "_expertise_v_version_content_sections" CASCADE;
  DROP TABLE "_expertise_v_version_standards" CASCADE;
  DROP TABLE "_expertise_v_version_process" CASCADE;
  DROP TABLE "_expertise_v_version_faq" CASCADE;
  ALTER TABLE "expertise" DROP CONSTRAINT "expertise_intro_image_id_media_id_fk";

  ALTER TABLE "expertise" DROP CONSTRAINT "expertise_seo_open_graph_image_id_media_id_fk";

  ALTER TABLE "expertise_rels" DROP CONSTRAINT "expertise_rels_projects_fk";

  ALTER TABLE "_expertise_v" DROP CONSTRAINT "_expertise_v_version_intro_image_id_media_id_fk";

  ALTER TABLE "_expertise_v" DROP CONSTRAINT "_expertise_v_version_seo_open_graph_image_id_media_id_fk";

  ALTER TABLE "_expertise_v_rels" DROP CONSTRAINT "_expertise_v_rels_projects_fk";

  DROP INDEX "expertise_intro_intro_image_idx";
  DROP INDEX "expertise_seo_seo_open_graph_image_idx";
  DROP INDEX "expertise_rels_projects_id_idx";
  DROP INDEX "_expertise_v_version_intro_version_intro_image_idx";
  DROP INDEX "_expertise_v_version_seo_version_seo_open_graph_image_idx";
  DROP INDEX "_expertise_v_rels_projects_id_idx";
  ALTER TABLE "expertise" DROP COLUMN "eyebrow";
  ALTER TABLE "expertise" DROP COLUMN "hero_title";
  ALTER TABLE "expertise" DROP COLUMN "hero_intro";
  ALTER TABLE "expertise" DROP COLUMN "topics_eyebrow";
  ALTER TABLE "expertise" DROP COLUMN "topics_title";
  ALTER TABLE "expertise" DROP COLUMN "intro_title";
  ALTER TABLE "expertise" DROP COLUMN "intro_body";
  ALTER TABLE "expertise" DROP COLUMN "intro_image_id";
  ALTER TABLE "expertise" DROP COLUMN "cta_title";
  ALTER TABLE "expertise" DROP COLUMN "cta_body";
  ALTER TABLE "expertise" DROP COLUMN "cta_button_label";
  ALTER TABLE "expertise" DROP COLUMN "cta_button_href";
  ALTER TABLE "expertise" DROP COLUMN "seo_meta_title";
  ALTER TABLE "expertise" DROP COLUMN "seo_meta_description";
  ALTER TABLE "expertise" DROP COLUMN "seo_open_graph_image_id";
  ALTER TABLE "expertise_rels" DROP COLUMN "projects_id";
  ALTER TABLE "_expertise_v" DROP COLUMN "version_eyebrow";
  ALTER TABLE "_expertise_v" DROP COLUMN "version_hero_title";
  ALTER TABLE "_expertise_v" DROP COLUMN "version_hero_intro";
  ALTER TABLE "_expertise_v" DROP COLUMN "version_topics_eyebrow";
  ALTER TABLE "_expertise_v" DROP COLUMN "version_topics_title";
  ALTER TABLE "_expertise_v" DROP COLUMN "version_intro_title";
  ALTER TABLE "_expertise_v" DROP COLUMN "version_intro_body";
  ALTER TABLE "_expertise_v" DROP COLUMN "version_intro_image_id";
  ALTER TABLE "_expertise_v" DROP COLUMN "version_cta_title";
  ALTER TABLE "_expertise_v" DROP COLUMN "version_cta_body";
  ALTER TABLE "_expertise_v" DROP COLUMN "version_cta_button_label";
  ALTER TABLE "_expertise_v" DROP COLUMN "version_cta_button_href";
  ALTER TABLE "_expertise_v" DROP COLUMN "version_seo_meta_title";
  ALTER TABLE "_expertise_v" DROP COLUMN "version_seo_meta_description";
  ALTER TABLE "_expertise_v" DROP COLUMN "version_seo_open_graph_image_id";
  ALTER TABLE "_expertise_v_rels" DROP COLUMN "projects_id";
  DROP TYPE "public"."enum_expertise_content_sections_layout";
  DROP TYPE "public"."enum_expertise_content_sections_theme";
  DROP TYPE "public"."enum_expertise_standards_type";
  DROP TYPE "public"."enum__expertise_v_version_content_sections_layout";
  DROP TYPE "public"."enum__expertise_v_version_content_sections_theme";
  DROP TYPE "public"."enum__expertise_v_version_standards_type";`)
}

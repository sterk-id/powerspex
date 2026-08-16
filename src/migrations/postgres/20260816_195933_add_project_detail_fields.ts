import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_projects_content_sections_layout" AS ENUM('right', 'left');
  CREATE TYPE "public"."enum_projects_content_sections_theme" AS ENUM('light', 'mist', 'dark');
  CREATE TYPE "public"."enum__projects_v_version_content_sections_layout" AS ENUM('right', 'left');
  CREATE TYPE "public"."enum__projects_v_version_content_sections_theme" AS ENUM('light', 'mist', 'dark');
  CREATE TABLE "projects_content_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"body" varchar,
  	"image_id" integer,
  	"layout" "enum_projects_content_sections_layout" DEFAULT 'right',
  	"theme" "enum_projects_content_sections_theme" DEFAULT 'light'
  );
  
  CREATE TABLE "projects_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar
  );
  
  CREATE TABLE "_projects_v_version_content_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"body" varchar,
  	"image_id" integer,
  	"layout" "enum__projects_v_version_content_sections_layout" DEFAULT 'right',
  	"theme" "enum__projects_v_version_content_sections_theme" DEFAULT 'light',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_projects_v_version_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar,
  	"_uuid" varchar
  );
  
  ALTER TABLE "projects" ADD COLUMN "hero_eyebrow" varchar;
  ALTER TABLE "projects" ADD COLUMN "hero_title" varchar;
  ALTER TABLE "projects" ADD COLUMN "hero_intro" varchar;
  ALTER TABLE "projects" ADD COLUMN "cta_title" varchar;
  ALTER TABLE "projects" ADD COLUMN "cta_body" varchar;
  ALTER TABLE "projects" ADD COLUMN "cta_button_label" varchar;
  ALTER TABLE "projects" ADD COLUMN "cta_button_href" varchar;
  ALTER TABLE "projects" ADD COLUMN "seo_meta_title" varchar;
  ALTER TABLE "projects" ADD COLUMN "seo_meta_description" varchar;
  ALTER TABLE "projects" ADD COLUMN "seo_open_graph_image_id" integer;
  ALTER TABLE "_projects_v" ADD COLUMN "version_hero_eyebrow" varchar;
  ALTER TABLE "_projects_v" ADD COLUMN "version_hero_title" varchar;
  ALTER TABLE "_projects_v" ADD COLUMN "version_hero_intro" varchar;
  ALTER TABLE "_projects_v" ADD COLUMN "version_cta_title" varchar;
  ALTER TABLE "_projects_v" ADD COLUMN "version_cta_body" varchar;
  ALTER TABLE "_projects_v" ADD COLUMN "version_cta_button_label" varchar;
  ALTER TABLE "_projects_v" ADD COLUMN "version_cta_button_href" varchar;
  ALTER TABLE "_projects_v" ADD COLUMN "version_seo_meta_title" varchar;
  ALTER TABLE "_projects_v" ADD COLUMN "version_seo_meta_description" varchar;
  ALTER TABLE "_projects_v" ADD COLUMN "version_seo_open_graph_image_id" integer;
  ALTER TABLE "projects_content_sections" ADD CONSTRAINT "projects_content_sections_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects_content_sections" ADD CONSTRAINT "projects_content_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_gallery" ADD CONSTRAINT "projects_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects_gallery" ADD CONSTRAINT "projects_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_version_content_sections" ADD CONSTRAINT "_projects_v_version_content_sections_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v_version_content_sections" ADD CONSTRAINT "_projects_v_version_content_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_version_gallery" ADD CONSTRAINT "_projects_v_version_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v_version_gallery" ADD CONSTRAINT "_projects_v_version_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "projects_content_sections_order_idx" ON "projects_content_sections" USING btree ("_order");
  CREATE INDEX "projects_content_sections_parent_id_idx" ON "projects_content_sections" USING btree ("_parent_id");
  CREATE INDEX "projects_content_sections_image_idx" ON "projects_content_sections" USING btree ("image_id");
  CREATE INDEX "projects_gallery_order_idx" ON "projects_gallery" USING btree ("_order");
  CREATE INDEX "projects_gallery_parent_id_idx" ON "projects_gallery" USING btree ("_parent_id");
  CREATE INDEX "projects_gallery_image_idx" ON "projects_gallery" USING btree ("image_id");
  CREATE INDEX "_projects_v_version_content_sections_order_idx" ON "_projects_v_version_content_sections" USING btree ("_order");
  CREATE INDEX "_projects_v_version_content_sections_parent_id_idx" ON "_projects_v_version_content_sections" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_version_content_sections_image_idx" ON "_projects_v_version_content_sections" USING btree ("image_id");
  CREATE INDEX "_projects_v_version_gallery_order_idx" ON "_projects_v_version_gallery" USING btree ("_order");
  CREATE INDEX "_projects_v_version_gallery_parent_id_idx" ON "_projects_v_version_gallery" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_version_gallery_image_idx" ON "_projects_v_version_gallery" USING btree ("image_id");
  ALTER TABLE "projects" ADD CONSTRAINT "projects_seo_open_graph_image_id_media_id_fk" FOREIGN KEY ("seo_open_graph_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_version_seo_open_graph_image_id_media_id_fk" FOREIGN KEY ("version_seo_open_graph_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "projects_seo_seo_open_graph_image_idx" ON "projects" USING btree ("seo_open_graph_image_id");
  CREATE INDEX "_projects_v_version_seo_version_seo_open_graph_image_idx" ON "_projects_v" USING btree ("version_seo_open_graph_image_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "projects_content_sections" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "projects_gallery" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_projects_v_version_content_sections" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_projects_v_version_gallery" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "projects_content_sections" CASCADE;
  DROP TABLE "projects_gallery" CASCADE;
  DROP TABLE "_projects_v_version_content_sections" CASCADE;
  DROP TABLE "_projects_v_version_gallery" CASCADE;
  ALTER TABLE "projects" DROP CONSTRAINT "projects_seo_open_graph_image_id_media_id_fk";
  
  ALTER TABLE "_projects_v" DROP CONSTRAINT "_projects_v_version_seo_open_graph_image_id_media_id_fk";
  
  DROP INDEX "projects_seo_seo_open_graph_image_idx";
  DROP INDEX "_projects_v_version_seo_version_seo_open_graph_image_idx";
  ALTER TABLE "projects" DROP COLUMN "hero_eyebrow";
  ALTER TABLE "projects" DROP COLUMN "hero_title";
  ALTER TABLE "projects" DROP COLUMN "hero_intro";
  ALTER TABLE "projects" DROP COLUMN "cta_title";
  ALTER TABLE "projects" DROP COLUMN "cta_body";
  ALTER TABLE "projects" DROP COLUMN "cta_button_label";
  ALTER TABLE "projects" DROP COLUMN "cta_button_href";
  ALTER TABLE "projects" DROP COLUMN "seo_meta_title";
  ALTER TABLE "projects" DROP COLUMN "seo_meta_description";
  ALTER TABLE "projects" DROP COLUMN "seo_open_graph_image_id";
  ALTER TABLE "_projects_v" DROP COLUMN "version_hero_eyebrow";
  ALTER TABLE "_projects_v" DROP COLUMN "version_hero_title";
  ALTER TABLE "_projects_v" DROP COLUMN "version_hero_intro";
  ALTER TABLE "_projects_v" DROP COLUMN "version_cta_title";
  ALTER TABLE "_projects_v" DROP COLUMN "version_cta_body";
  ALTER TABLE "_projects_v" DROP COLUMN "version_cta_button_label";
  ALTER TABLE "_projects_v" DROP COLUMN "version_cta_button_href";
  ALTER TABLE "_projects_v" DROP COLUMN "version_seo_meta_title";
  ALTER TABLE "_projects_v" DROP COLUMN "version_seo_meta_description";
  ALTER TABLE "_projects_v" DROP COLUMN "version_seo_open_graph_image_id";
  DROP TYPE "public"."enum_projects_content_sections_layout";
  DROP TYPE "public"."enum_projects_content_sections_theme";
  DROP TYPE "public"."enum__projects_v_version_content_sections_layout";
  DROP TYPE "public"."enum__projects_v_version_content_sections_theme";`)
}

ALTER TABLE "vehicles" ALTER COLUMN "description" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "vehicule_images" ADD COLUMN "order" integer DEFAULT 0 NOT NULL;
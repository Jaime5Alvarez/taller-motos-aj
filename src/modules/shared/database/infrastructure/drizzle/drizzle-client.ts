import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "@/modules/shared/database/infrastructure/drizzle/schema";

let instance: PostgresJsDatabase<typeof schema> | null = null;
let client: postgres.Sql | null = null;

export function getSession(): PostgresJsDatabase<typeof schema> {
  if (!instance) {
    const postgresUrl = process.env.DATABASE_URL;
    if (!postgresUrl) {
      throw new Error("PostgreSQL URL is not defined");
    }

    client = postgres(postgresUrl);
    instance = drizzle(client, {
      schema: schema,
    });
  }
  return instance;
}

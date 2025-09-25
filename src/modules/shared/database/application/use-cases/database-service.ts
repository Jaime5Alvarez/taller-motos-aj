import { DrizzleClient } from "@/modules/shared/database/infrastructure/drizzle/drizzle-client";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import * as schema from "@/modules/shared/database/infrastructure/drizzle/schema";

export function FactoryDatabaseService(): PostgresJsDatabase<typeof schema> {
  return DrizzleClient.getSession();
}

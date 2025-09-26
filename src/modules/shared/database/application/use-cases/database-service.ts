import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { getSession } from "@/modules/shared/database/infrastructure/drizzle/drizzle-client";
import type * as schema from "@/modules/shared/database/infrastructure/drizzle/schema";

export function FactoryDatabaseService(): PostgresJsDatabase<typeof schema> {
  return getSession();
}

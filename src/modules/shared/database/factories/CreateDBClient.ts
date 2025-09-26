import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import type * as schema from "@/modules/shared/database/infrastructure/drizzle/schema";
import { getSession } from "../infrastructure/drizzle/drizzle-client";

export function CreateDBClient(): PostgresJsDatabase<typeof schema> {
  return getSession();
}

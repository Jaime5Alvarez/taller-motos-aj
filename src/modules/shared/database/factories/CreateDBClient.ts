import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { DrizzleClient } from "../infrastructure/drizzle/drizzle-client";
import * as schema from "@/modules/shared/database/infrastructure/drizzle/schema";

export function CreateDBClient(): PostgresJsDatabase<typeof schema> {
  return DrizzleClient.getSession();
}

import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "@/modules/shared/database/infrastructure/drizzle/schema";

export class DrizzleClient {
  private static instance: PostgresJsDatabase<typeof schema>;
  private static client: postgres.Sql;

  public static getSession(): PostgresJsDatabase<typeof schema> {
    if (!DrizzleClient.instance) {
      const postgresUrl = process.env.DATABASE_URL!;
      if (!postgresUrl) {
        throw new Error("PostgreSQL URL is not defined");
      }

      DrizzleClient.client = postgres(postgresUrl);
      DrizzleClient.instance = drizzle(DrizzleClient.client, {
        schema: schema,
      });
    }
    return DrizzleClient.instance;
  }
}

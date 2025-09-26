import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { FactoryDatabaseService } from "@/modules/shared/database/application/use-cases/database-service";

export const auth = betterAuth({
  database: drizzleAdapter(FactoryDatabaseService(), {
    provider: "pg", // or "mysql", "sqlite"
  }),
  emailAndPassword: {
    enabled: true,
  },
});

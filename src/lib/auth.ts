import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { FactoryDatabaseService } from "@/modules/shared/database/application/use-cases/database-service";
import { SendEmailUseCaseFactory } from "@/modules/email/application/send-email-use-cases";

export const auth = betterAuth({
  database: drizzleAdapter(FactoryDatabaseService(), {
    provider: "pg", // or "mysql", "sqlite"
  }),
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url, token }, request) => {
      SendEmailUseCaseFactory().execute({
        to: user.email,
        subject: "Reset your password",
        text: `Haz click en el siguiente enlace para resetear tu contraseña de talleraj: ${url}`,
      });
    },
    onPasswordReset: async ({ user }, request) => {
      // your logic here
    },
  },
});

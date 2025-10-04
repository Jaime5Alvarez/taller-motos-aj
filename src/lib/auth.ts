import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { SendEmailUseCaseFactory } from "@/modules/email/application/send-email-use-cases";
import { FactoryDatabaseService } from "@/modules/shared/database/application/use-cases/database-service";

export const auth = betterAuth({
  database: drizzleAdapter(FactoryDatabaseService(), {
    provider: "pg", // or "mysql", "sqlite"
  }),
  trustedOrigins: [
    "http://localhost:3000",
    "https://www.ajmotorbikes.com",
    "https://ajmotorbikes.com",
  ],
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }, _request) => {
      SendEmailUseCaseFactory().execute({
        to: user.email,
        subject: "Reset your password",
        text: `Haz click en el siguiente enlace para resetear tu contraseña de talleraj: ${url}`,
      });
    },
    onPasswordReset: async (_request) => {
      // your logic here
    },
  },
});

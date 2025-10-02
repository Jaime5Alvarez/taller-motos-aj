import { Resend } from "resend";
import type { IEmailService } from "@/modules/email/domain/interfaces";

export class ResendEmailService implements IEmailService {
  private readonly client: Resend;
  private readonly apiKey: string;

  constructor() {
    this.apiKey = process.env.RESEND_API_KEY || "";
    if (!this.apiKey) {
      throw new Error("RESEND_API_KEY is not defined");
    }
    this.client = new Resend(this.apiKey);
  }

  async sendEmail({
    to,
    subject,
    text,
  }: {
    to: string;
    subject: string;
    text: string;
  }) {
    await this.client.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to,
      subject,
      text,
    });
  }
}

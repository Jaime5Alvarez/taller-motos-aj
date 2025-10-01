import { IEmailService } from "@/modules/email/domain/interfaces";
import { ResendEmailService } from "@/modules/email/infraestructure/resend-email-service";

class SendEmailUseCase {
  constructor(private readonly emailService: IEmailService) {
    this.emailService = emailService;
  }

  async execute({
    to,
    subject,
    text,
  }: {
    to: string;
    subject: string;
    text: string;
  }) {
    await this.emailService.sendEmail({ to, subject, text });
  }
}

export function SendEmailUseCaseFactory(
  emailService: IEmailService = new ResendEmailService(),
) {
  return new SendEmailUseCase(emailService);
}

export interface IEmailService {
  sendEmail: ({
    to,
    subject,
    text,
  }: {
    to: string;
    subject: string;
    text: string;
  }) => Promise<void>;
}

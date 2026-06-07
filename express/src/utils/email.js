import { Resend } from "resend";
import config from "../config/config.js";

const resend = new Resend(config.emailApiKey);
const sendEmail = async (recipient, {subject, body}) => {
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: [recipient],
    subject: subject,
    html: body,
  });

  if (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};

export default sendEmail;

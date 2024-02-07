"use server";

import { validateString } from "@/lib/utils";
import { Resend } from "resend";
import EmailFormTemplate from "@/components/EmailFormTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const sender = formData.get("sender");
  const message = formData.get("message");

  if (!validateString(sender, 500)) {
    return {
      error: "Invalid Email",
    };
  }

  if (!validateString(message, 3000)) {
    return {
      error: "Invalid message",
    };
  }

  let data: unknown;
  try {
    data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "popielpiotr90@gmail.com",
      subject: "Message from Portfolio contact form",
      react: EmailFormTemplate({
        message: message as string,
        sender: sender as string,
      }),
    });
  } catch (error: unknown) {
    return data?.error?.message;
  }

  return data;
};

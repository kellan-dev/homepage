"use server";

import { z } from "zod";
import { contactFormSchema } from "@/lib/schemas";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendEmail(values: z.infer<typeof contactFormSchema>) {
  const validated = contactFormSchema.safeParse(values);
  if (!validated.success) {
    return { success: false };
  }

  const result = await resend.emails.send({
    from: "Contact Form <noreply@kellan.dev>",
    to: "hi@kellan.dev",
    subject: "Message from contact form",
    replyTo: validated.data.email,
    html: `From:<br/>${validated.data.name} (${validated.data.email})<br/><br/>Message:<br/>${validated.data.message}`,
  });

  if (result.error) {
    console.error(result.error);
    return { success: false };
  }

  return { success: true };
}

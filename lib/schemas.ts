import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, { message: "Please enter your name" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Please enter your email" })
    .email({ message: "Please enter a valid email" }),
  message: z.string().trim().min(1, { message: "Please enter a message" }),
});

"use client";

import { z } from "zod";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { contactFormSchema } from "@/lib/schemas";
import { sendEmail } from "@/lib/actions";
import { useTransition } from "react";
import { Spinner } from "@/components/ui-custom/spinner";
import { defaultSpring } from "@/lib/motion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

export default function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...defaultSpring, delay: 0.1 }}
      className="flex flex-col gap-4 text-sm text-muted-foreground sm:text-base"
      id="contact"
    >
      <h2 className="border-b text-xl text-foreground">Contact</h2>
      <div className="space-y-6 leading-relaxed">
        <p>
          If you want to get in touch, don&apos;t hesitate to{" "}
          <a href="mailto:hi@kellan.dev" className="underline">
            send me an email
          </a>{" "}
          or use the form below. I&apos;d love to hear from you!
        </p>
        <ContactForm />
      </div>
    </motion.section>
  );
}

function ContactForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    startTransition(async () => {
      const result = await sendEmail(values);

      if (!result.success) {
        toast.error("Sorry, something went wrong! Please try again later.");
        return;
      }

      toast.success("Thank you for your message! I'll get back to you soon.");
      form.reset();
    });
  }

  return (
    <div className="m-auto max-w-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel>Name</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    className="backdrop-blur-md"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel>Email</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    className="backdrop-blur-md"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel>Message</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Textarea
                    {...field}
                    disabled={isPending}
                    className="backdrop-blur-md"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isPending}>
            {isPending && <Spinner size="xs" />}
            Send message
          </Button>
        </form>
      </Form>
    </div>
  );
}

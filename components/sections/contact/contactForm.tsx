"use client";

import { z } from "zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Please enter your name (at least 2 characters)." }),
  email: z.email({
    message: "Enter a valid email address (e.g., name@example.com).",
  }),
  phoneNumber: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val) return true; // ✅ allow undefined or empty string

        const indianRegex = /^[6-9]\d{9}$/; // Indian: 10 digits, starts with 6-9
        const internationalRegex = /^\+?[1-9]\d{6,14}$/; // International: + and 7-15 digits

        return indianRegex.test(val) || internationalRegex.test(val);
      },
      {
        message:
          "Invalid phone number. Use a valid Indian 10-digit number or international format (e.g. +14155552671).",
      },
    ),
  projectType: z.string(),
  message: z.string().min(10, {
    message: "Your message should be at least 10 characters long.",
  }),
  budget: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      email: "",
      projectType: "",
      message: "",
      budget: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_CONTACT_FORM_ACCESS_KEY as string,
    );
    Object.entries(values).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Your message has been sent successfully!");
        form.reset();
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "An unexpected error occurred",
      );
    }
    setIsSubmitting(false);
  }

  return (
    <div className="mx-auto w-full rounded-xl bg-background p-8 text-left font-workSans shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-4 space-y-4 lg:grid-cols-2 lg:space-y-0">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full rounded-none border-0 border-b bg-transparent text-foreground focus-visible:ring-0 dark:bg-transparent"
                      placeholder="John Doe"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full rounded-none border-0 border-b bg-transparent text-foreground focus-visible:ring-0 dark:bg-transparent"
                      type="email"
                      placeholder="your@email.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="my-8 grid grid-cols-1 gap-4 space-y-4 lg:grid-cols-2 lg:space-y-0">
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full rounded-none border-0 border-b bg-transparent text-foreground focus-visible:ring-0 dark:bg-transparent"
                      type="tel"
                      inputMode="tel"
                      placeholder="+91 9876543210"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Type</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full rounded-none border-0 border-b bg-transparent text-foreground focus-visible:ring-0 dark:bg-transparent">
                        <SelectValue placeholder="project Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Project Type</SelectLabel>
                          <SelectItem value="Website / Web App Development">
                            Website / Web App Development
                          </SelectItem>
                          <SelectItem value="Mobile App Development">
                            Mobile App Development
                          </SelectItem>
                          <SelectItem value="UI/UX Design">
                            UI/UX Design
                          </SelectItem>
                          <SelectItem value="Website Maintainance & Support">
                            Website Maintainance & Support
                          </SelectItem>
                          <SelectItem value="general inquiry">
                            General Inquiry
                          </SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    className="w-full rounded-none border-0 border-b bg-transparent text-foreground focus-visible:ring-0 dark:bg-transparent"
                    placeholder="Write your message..."
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Budget</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full rounded-none border-0 border-b bg-transparent text-foreground focus-visible:ring-0 dark:bg-transparent">
                      <SelectValue placeholder="Select your Budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Budget</SelectLabel>
                        <SelectItem value="Less than $500">
                          Less than $500
                        </SelectItem>
                        <SelectItem value="$500 - $1,000">
                          $500 - $1,000
                        </SelectItem>
                        <SelectItem value="$1,000 - $3,000">
                          $1,000 - $3,000
                        </SelectItem>
                        <SelectItem value="$3,000 - $5,000">
                          $3,000 - $5,000
                        </SelectItem>
                        <SelectItem value="$5,000+">$5,000+</SelectItem>
                        <SelectItem value="Not Sure Yet">
                          Not Sure Yet
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="group mr-2 mb-2 w-full rounded-lg bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-400/50 hover:bg-gradient-to-br lg:w-auto dark:shadow-lg dark:shadow-blue-800/80"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <span className="relative overflow-hidden">
                <div className="absolute origin-bottom [transform:translateX(-150%)_skewX(9deg)] transition duration-[1.125s] group-hover:[transform:translateX(0)_skewX(0deg)]">
                  Send Message
                </div>
                <div className="[transform:translateX(0%)_skewX(0deg)] transition duration-[1.125s] group-hover:[transform:translateX(150%)_skewX(9deg)]">
                  Send Message
                </div>
              </span>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}

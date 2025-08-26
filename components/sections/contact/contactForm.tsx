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
  phoneNumber: z.string().refine(
    (val) => {
      // Indian format: 10 digits, starts with 6-9
      const indianRegex = /^[6-9]\d{9}$/;
      // International format: + followed by 7-15 digits
      const internationalRegex = /^\+?[1-9]\d{6,14}$/;

      return indianRegex.test(val) || internationalRegex.test(val);
    },
    {
      message:
        "Invalid phone number. Use a valid Indian 10-digit number or international format (e.g. +14155552671).",
    }
  ),
  projectType: z.string().optional(),
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
    formData.append("access_key", "6704c404-c1f4-4b31-853c-1075203c941f");
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
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    }
    setIsSubmitting(false);
  }

  return (
    <div
      className="w-full mx-auto text-left p-8 font-workSans bg-background shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
      dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)] rounded-xl"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full bg-transparent dark:bg-transparent border-0 border-b rounded-none text-foreground focus-visible:ring-0"
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
                      className="w-full bg-transparent dark:bg-transparent border-0 border-b rounded-none text-foreground focus-visible:ring-0"
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-16">
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full bg-transparent dark:bg-transparent border-0 border-b rounded-none text-foreground focus-visible:ring-0"
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
                      <SelectTrigger className="w-full bg-transparent dark:bg-transparent border-0 border-b rounded-none text-foreground focus-visible:ring-0">
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
                    className="w-full bg-transparent dark:bg-transparent border-0 border-b rounded-none text-foreground focus-visible:ring-0"
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
                    <SelectTrigger className="w-full bg-transparent dark:bg-transparent border-0 border-b rounded-none text-foreground focus-visible:ring-0">
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

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}

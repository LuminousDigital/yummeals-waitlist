import { z } from "zod";

export const waitlistSchema = z.object({
  firstName: z.string()
    .min(2, { message: "First name must be at least 2 characters" })
    .max(50, { message: "First name cannot exceed 50 characters" })
    .transform(str => str.trim()),

  lastName: z.string()
    .min(2, { message: "Last name must be at least 2 characters" })
    .max(50, { message: "Last name cannot exceed 50 characters" })
    .transform(str => str.trim()),

  email: z.string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email (e.g., you@example.com)" })
    .max(100, { message: "Email is too long (max 100 characters)" })
    .transform(str => str.toLowerCase().trim()),

  phoneNumber: z.string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number is too long (max 15 characters)" })
    .transform(str => str.trim()),

  personalityType: z.string()
    .max(50, { message: "Personality type is too long (max 50 characters)" })
    .optional(),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;
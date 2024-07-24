import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signupFormSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/\d/, "Password must contain at least one number")
      .regex(
        /[!"#$%&()*,.:<>?@^{|}]/,
        "Password must contain at least one special character",
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const linkSchema = z.object({
  link: z.string().url({ message: "Please enter a valid URL." }),
  platforms: z
    .string()
    .min(2, {
      message: "Platform name should not be less than 2 characters.",
    })
    .optional(),
});

export const addLinkFormSchema = z.object({
  links: z.array(linkSchema),
});

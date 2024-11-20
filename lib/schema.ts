import { z } from "zod";
import { Types } from "mongoose";

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
  _id: z
    .string()
    .refine((val) => Types.ObjectId.isValid(val), {
      message: "Invalid MongoDB ObjectId",
    })
    .optional(),
  link: z.string().url({ message: "Please enter a valid URL." }),
  platform: z
    .enum([
      "github",
      "frontendMentor",
      "twitter",
      "linkedin",
      "youtube",
      "facebook",
      "twitch",
      "devTo",
      "codewars",
      "freeCodeCamp",
      "gitlab",
      "hashnode",
      "stackOverflow",
    ])
    .nullable(),
});

export const addLinkFormSchema = z.object({
  links: z.array(linkSchema),
});

export const userProfileSchema = z.object({
  profilePicture: z.instanceof(File).optional().nullable(),
  firstName: z
    .string()
    .min(2, "First name must be longer than 1 character")
    .optional(),
  lastName: z
    .string()
    .min(2, "Last name must be longer than 1 character")
    .optional(),
  email: z.string().email("Invalid email address").optional(),
});

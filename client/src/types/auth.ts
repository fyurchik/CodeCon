import { z as zod } from "zod";

export const registerSchema = zod
    .object({
        firstName: zod.string().trim().min(1, { message: "Enter your first name" }),
        lastName: zod.string().trim().min(1, { message: "Enter your last name" }),
        email: zod.string().min(1, { message: "Enter your email" }),
        role: zod.enum(["in_need", "volonteer"]),
        password: zod
            .string()
            .trim()
            .min(1, { message: "Enter your password" })
            .min(8, { message: "Password must be at least 8 characters long" })
            .max(255, { message: "Password must be at most 255 characters long" }),
        confirmPassword: zod.string().trim().min(1, { message: "Confirm your password" }),
    })
    .refine((schemaData) => schemaData.password === schemaData.confirmPassword, {
        message: "Passwords must match",
        path: ["confirmPassword"],
    });

export type RegisterSchema = zod.infer<typeof registerSchema>;

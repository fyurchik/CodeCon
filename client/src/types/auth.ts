import { z as zod } from "zod";

export const registerSchema = zod
    .object({
        firstName: zod.string().trim().min(1, { message: "Введіть Ваше ім'я" }),
        lastName: zod.string().trim().min(1, { message: "Введіть Ваше прізвище" }),
        email: zod
            .string()
            .email({ message: "Введіть вірну електронну адресу" })
            .min(1, { message: "Введіть вашу електронну адресу" }),
        role: zod.enum(["in_need", "volonteer"]),
        password: zod
            .string()
            .trim()
            .min(1, { message: "Введіть Ваш пароль" })
            .min(8, { message: "Пароль має бути мінімум 8 символів" })
            .max(255, { message: "Пароль не можу бути довшим за 255 символів" }),
        confirmPassword: zod.string().trim().min(1, { message: "Подтвердіть Ваш пароль" }),
    })
    .refine((schemaData) => schemaData.password === schemaData.confirmPassword, {
        message: "Паролі мають збігатись",
        path: ["confirmPassword"],
    });

export const loginSchema = zod.object({
    email: zod
        .string()
        .email({ message: "Введіть вірну електронну адресу" })
        .min(1, { message: "Введіть Вашу електронну адресу" }),
    password: zod
        .string()
        .trim()
        .min(1, { message: "Введіть Ваш пароль" })
        .min(8, { message: "Пароль має бути мінімум 8 символів" })
        .max(255, { message: "Пароль не можу бути довшим за 255 символів" }),
});

export const baseUserSchema = zod.object({
    firstName: zod.string().trim().min(1, { message: "Введіть Ваше ім'я" }),
    lastName: zod.string().trim().min(1, { message: "Введіть Ваше прізвище" }),
    email: zod
        .string()
        .email({ message: "Введіть вірну електронну адресу" })
        .min(1, { message: "Введіть Вашу електронну адресу" }),
});

export type RegisterSchema = zod.infer<typeof registerSchema>;
export type LoginSchema = zod.infer<typeof loginSchema>;
export type BaseUserSchema = zod.infer<typeof baseUserSchema>;

export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    role: "IsVolonterr" | "SimpleUser";
}

import { z as zod } from "zod";

export const aplicationSchema = zod.object({
    requestArea: zod.string().min(1, { message: "Введіть інформацію про Ваш запит" }),
    desciptionArea: zod.string().min(1, { message: "Введіть детальну інформацію про Ваш запит" }),
    age: zod.number().min(1, { message: "Введіть Ваш вік" }).max(3, { message: "Введіть Ваш релаьний вік" }),
    city: zod.string().min(1, { message: "Введіть місто" }),
    categories: zod.string().array().min(1, { message: "Виберіть категорію" }),
    contactPhone: zod.string().min(1, { message: "Введіть Ваш номер телефону" }),
    contactEmail: zod
        .string()
        .email({ message: "Введіть вірну електронну адресу" })
        .min(1, { message: "Введіть вашу електронну адресу" }),
});

export type AplicationSchema = zod.infer<typeof aplicationSchema>;

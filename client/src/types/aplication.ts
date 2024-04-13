import { z as zod } from "zod";

export const aplicationSchema = zod.object({
    title: zod.string().min(1, { message: "Введіть інформацію про Ваш запит" }),
    content: zod.string().min(1, { message: "Введіть детальну інформацію про Ваш запит" }),
    age: zod.coerce.number().gte(1, { message: "Введіть Ваш вік" }),
    city: zod.string().min(1, { message: "Введіть місто" }),
    // categories: zod.string().array().min(1, { message: "Виберіть категорію" }),
    urgent: zod.enum(["urgent", "not_urgent"]),
    phone_number: zod.string().min(1, { message: "Введіть Ваш номер телефону" }),
    email: zod
        .string()
        .email({ message: "Введіть вірну електронну адресу" })
        .min(1, { message: "Введіть вашу електронну адресу" }),
});

export type AplicationSchema = zod.infer<typeof aplicationSchema>;

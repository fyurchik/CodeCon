import { useMutation } from "@tanstack/react-query";
import { HTTPError } from "ky";
import { toast } from "sonner";
import { login, register } from "./requests";
import { LoginSchema, RegisterSchema } from "@/types/auth";

export const useRegister = () => {
    return useMutation({
        mutationFn: (input: RegisterSchema) => register(input),
        onError: async (err) => {
            if (err instanceof HTTPError) {
                const error = (await err.response.json()) as { message: string };
                toast.error(error.message);
                return;
            }
            toast.error("Не вдалося створити акаунт!");
        },
        onSuccess: async () => {
            toast.success("Акаунт успішно створено!");
        },
    });
};

export const useLogin = () => {
    return useMutation({
        mutationFn: (input: LoginSchema) => login(input),
        onError: async (err) => {
            if (err instanceof HTTPError) {
                const error = (await err.response.json()) as { message: string };
                toast.error(error.message);
                return;
            }
            toast.error("Не вдалося увійти в акаунт!");
        },
        onSuccess: async () => {
            toast.success("Ви успішно увійшли в акаунт!");
        },
    });
};

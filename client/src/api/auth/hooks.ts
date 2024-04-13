import { useMutation } from "@tanstack/react-query";
import { HTTPError } from "ky";
import { toast } from "sonner";
import { register } from "./requests";
import { RegisterSchema } from "@/types/auth";

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

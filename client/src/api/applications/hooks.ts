import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { HTTPError } from "ky";
import { useContext } from "react";
import { toast } from "sonner";
import { createApplication } from "./requests";
import { UserContext } from "@/context/User";
import { AplicationSchema } from "@/types/aplication";

export const useCreateApplication = (token: string | null) => {
    return useMutation({
        mutationFn: (input: AplicationSchema) => createApplication(token, input),
        onError: async (err) => {
            if (err instanceof HTTPError) {
                const error = (await err.response.json()) as { detail: string };
                toast.error(error.detail);
                return;
            }
            toast.error("Не вдалося створити запит!");
        },
        onSuccess: async () => {
            toast.success("Запит успішно створено!");
        },
    });
};

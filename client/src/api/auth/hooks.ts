import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { HTTPError } from "ky";
import { useContext } from "react";
import { toast } from "sonner";
import { getUserData, login, register } from "./requests";
import { UserContext } from "@/context/User";
import { LoginSchema, RegisterSchema } from "@/types/auth";

export const useRegister = () => {
    const navigate = useNavigate();
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
            void navigate({ to: "/auth/login" });
        },
    });
};

export const useLogin = () => {
    const { setUser, setToken } = useContext(UserContext);
    const navigate = useNavigate();
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
        onSuccess: async (data) => {
            toast.success("Ви успішно увійшли в акаунт!");
            setUser(data.user);
            setToken(data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("token", JSON.stringify(data.token));
            void navigate({ to: "/cabinet" });
        },
    });
};

export const useUserData = (token: string | null) => {
    console.log(token);
    return useQuery({
        queryKey: ["user", token],
        queryFn: () => getUserData(token),
        enabled: Boolean(token),
        retry: false,
        staleTime: Infinity,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });
};

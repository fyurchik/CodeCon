import { useMutation } from "@tanstack/react-query";
import { HTTPError } from "ky";
import { test } from "./requests";

export const useSignUp = () => {
    return useMutation({
        mutationFn: (input: string) => test(input),
        onError: async (err) => {
            if (err instanceof HTTPError) {
                const error = (await err.response.json()) as string;
                alert(error);
                return;
            }
            alert("Failed to sign up");
        },
        onSuccess: async () => {
            alert("Account created successfully");
        },
    });
};

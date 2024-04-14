import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { HTTPError } from "ky";
import { useContext } from "react";
import { toast } from "sonner";
import { createApplication, getApplications } from "./requests";
import { UserContext } from "@/context/User";
import { AplicationSchema } from "@/types/aplication";

export const useCreateApplication = (token: string | null) => {
    const QueryClient = useQueryClient();
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
            void QueryClient.invalidateQueries({ queryKey: ["applications"] });
            toast.success("Запит успішно створено!");
        },
    });
};

export const useApplications = (token: string | null) => {
    return useInfiniteQuery({
        queryKey: ["notes", token],
        queryFn: ({ pageParam }) => getApplications(token, pageParam),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            if (allPages.length < lastPage.pages) {
                return allPages.length + 1;
            }
            return null;
        },
    });
};

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

export const useApplications = (
    token: string | null,
    title: string,
    urgent: "urgent" | "not_urgent" | "all",
    city: string
) => {
    return useInfiniteQuery({
        queryKey: ["notes", token, title, city, urgent],
        queryFn: ({ pageParam }) => getApplications(token, pageParam, title, urgent, city),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            if (allPages.length < lastPage.allpages) {
                return allPages.length + 1;
            }
            return null;
        },
    });
};

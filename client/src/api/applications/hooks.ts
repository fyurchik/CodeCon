import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { HTTPError } from "ky";
import { toast } from "sonner";
import {
    createApplication,
    deleteApplication,
    getApplication,
    getApplications,
    getMyApplications,
    getTags,
} from "./requests";
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
    urgent: "urgent" | "not_urgent" | "all",
    title: string,
    city: string,
    tag: string
) => {
    return useInfiniteQuery({
        queryKey: ["notes", token, title, city, urgent, tag],
        queryFn: ({ pageParam }) => getApplications(token, pageParam, urgent, title, city, tag),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            if (allPages.length < lastPage.allpages) {
                return allPages.length + 1;
            }
            return null;
        },
    });
};

export const useMyApplications = (token: string | null) => {
    return useQuery({
        queryKey: ["myApplications", token],
        queryFn: () => getMyApplications(token),
    });
};

export const useDeleteApplication = (token: string | null) => {
    const QueryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: number) => deleteApplication(token, id),
        onError: async (err) => {
            if (err instanceof HTTPError) {
                const error = (await err.response.json()) as { detail: string };
                toast.error(error.detail);
                return;
            }
            toast.error("Не вдалося видалити запит!");
        },
        onSuccess: async () => {
            void QueryClient.invalidateQueries({ queryKey: ["myApplications"] });
            toast.success("Запит успішно видалено!");
        },
    });
};

export const useTags = () => {
    return useQuery({
        queryKey: ["tags"],
        queryFn: async () => getTags(),
    });
};

export const useApplication = (id: number, token: string | null) => {
    return useQuery({
        queryKey: ["application", id, token],
        // queryFn: async () =>
        //     getApplications(token, 1, "all", "", "", "").then((res) => res.results.find((app) => app.id === id)),
        queryFn: async () => getApplication(token, id),
    });
};

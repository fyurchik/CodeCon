import { api } from "../api";
import { AplicationSchema } from "@/types/aplication";

export const createApplication = async (token: string | null, data: AplicationSchema) => {
    const res = await api
        .post("authorize/makepost/", {
            headers: {
                Authorization: `Token ${token}`,
            },
            json: { ...data, tags: [] },
        })
        .json();
    return res;
};

export const getApplications = async (
    token: string | null,
    page: number,
    urgent: "urgent" | "not_urgent" | "all",
    title?: string,
    city?: string,
    tag?: string
) => {
    const res = await api
        .get(
            `authorize/applications/?page=${page}&title=${title ?? ""}&urgent=${urgent}&city=${city ?? ""}&tags=${tag ?? ""}`,
            {
                headers: {
                    Authorization: `Token ${token}`,
                },
            }
        )
        .json<{
            count: number;
            allpages: number;
            results: {
                active: boolean;
                age: number;
                city: string;
                content: string;
                email: string;
                id: number;
                phone_number: string;
                tags: number[];
                title: string;
                urgent: "urgent" | "not_urgent";
                user: number;
            }[];
        }>();
    return res;
};

export const getMyApplications = async (token: string | null) => {
    const res = await api
        .get("authorize/applications/my", {
            headers: {
                Authorization: `Token ${token}`,
            },
        })
        .json<{
            results: {
                active: boolean;
                age: number;
                city: string;
                content: string;
                email: string;
                id: number;
                phone_number: string;
                tags: number[];
                title: string;
                urgent: "urgent" | "not_urgent";
                user: number;
            }[];
        }>();
    return res;
};

export const deleteApplication = async (token: string | null, id: number) => {
    const res = await api
        .delete(`authorize/applications/my/${id}`, {
            headers: {
                Authorization: `Token ${token}`,
            },
        })
        .json();
    return res;
};

export const getTags = async () => {
    const res = await api.get("authorize/applications/tags").json<{ tags: { id: number; name: string }[] }>();
    return res;
};

export const getApplication = async (token: string | null, id: number) => {
    const res = await api
        .get(`authorize/applications/${id}`, {
            headers: {
                Authorization: `Token ${token}`,
            },
        })
        .json<{
            results: [
                {
                    id: number;
                    tags: string[];
                    title: string;
                    content: string;
                    active: true;
                    urgent: "urgent" | "not_urgent";
                    age: number;
                    phone_number: string;
                    city: string;
                    email: string;
                    user: number;
                },
            ];
        }>();
    return res;
};

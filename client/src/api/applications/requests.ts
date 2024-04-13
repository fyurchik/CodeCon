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

export const getApplications = async (token: string | null) => {
    const res = await api
        .get("authorize/applications/", {
            headers: {
                Authorization: `Token ${token}`,
            },
        })
        .json<{
            count: number;
            next: string;
            previous: string;
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
                urgent: boolean;
                user: number;
            }[];
        }>();
    return res;
};

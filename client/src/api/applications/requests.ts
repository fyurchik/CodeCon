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

export const getApplications = async (token: string | null, page: number) => {
    const res = await api
        .get(`authorize/applications/?page=${page}`, {
            headers: {
                Authorization: `Token ${token}`,
            },
        })
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
                urgent: boolean;
                user: number;
            }[];
        }>();
    return res;
};

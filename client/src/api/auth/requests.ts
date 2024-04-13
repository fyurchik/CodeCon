import { api } from "../api";

export const test = async (data: string) => {
    const res = await api.post("api/test", { json: data }).json();
    return res;
};

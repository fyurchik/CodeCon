import { api } from "../api";

export const test = async (data: string) => {
    const res = await api.post("api/test", { json: data }).json();
    return res;
};

export const healthcheck = async () => {
    const res = await api.get("authorize/").json();
    return res;
};

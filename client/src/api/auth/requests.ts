import { api } from "../api";
import { RegisterSchema } from "@/types/auth";

export const healthcheck = async () => {
    const res = await api.get("authorize/").json();
    return res;
};

export const register = async (data: RegisterSchema) => {
    const res = await api.post("authorize/register/", { json: data }).json();
    return res;
};

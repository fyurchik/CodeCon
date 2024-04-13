import { api } from "../api";

export const healthcheck = async () => {
    const res = await api.get("authorize/").json();
    return res;
};

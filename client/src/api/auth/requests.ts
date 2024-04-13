import { api } from "../api";
import { LoginSchema, RegisterSchema, User } from "@/types/auth";

export const healthcheck = async () => {
    const res = await api.get("authorize/").json();
    return res;
};

export const register = async (data: RegisterSchema) => {
    const res = await api
        .post("authorize/register/", {
            json: {
                first_name: data.firstName,
                last_name: data.lastName,
                email: data.email,
                role: data.role === "volonteer" ? "IsVolonteer" : "SimpleUser",
                username: data.email,
                password: data.password,
                password2: data.password,
            },
        })
        .json();
    return res;
};

export const login = async (data: LoginSchema) => {
    const res = await api
        .post("authorize/login/", { json: { username: data.email, password: data.password } })
        .json<{ user: User; token: string }>();
    return res;
};

export const logout = async (token: string | null) => {
    const res = await api
        .post("authorize/logout/", {
            headers: {
                Authorization: `Token ${token}`,
            },
        })
        .json();
    return res;
};

export const getUserData = async (token: string | null) => {
    const res = await api
        .get("authorize/getuserdata/", {
            headers: {
                Authorization: `Token ${token}`,
            },
        })
        .json<{ user: User; token: string }>();
    return res;
};

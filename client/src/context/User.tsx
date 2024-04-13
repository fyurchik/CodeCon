import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { useUserData } from "@/api/auth/hooks";
import { User } from "@/types/auth";

interface UserContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    token: string | null;
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
    isAuthorized: boolean;
    refetchUser: () => Promise<void>;
}

const iUserContextState = {
    user: null,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setUser: () => {},
    token: null,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setToken: () => {},
    isAuthorized: true,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    refetchUser: async () => {},
};

export const UserContext = createContext<UserContextType>(iUserContextState);

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
    const localUser = localStorage.getItem("user");
    const initUser = localUser ? (JSON.parse(localUser) as User) : null;
    const [user, setUser] = useState<User | null>(initUser);
    const localToken = localStorage.getItem("token");
    const initToken = localToken ? (JSON.parse(localToken) as string) : null;
    const [token, setToken] = useState<string | null>(initToken);
    const isAuthorized = useMemo(() => Boolean(user?.id && user.email), [user]);

    const getUserHandler = useUserData(token);

    const refetchUser = useCallback(async () => {
        await getUserHandler.refetch();
        if (getUserHandler.isError) {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            setUser(null);
            setToken(null);
            toast.error("Сесія вийшла");
        }
        if (getUserHandler.data) {
            setUser(getUserHandler.data.user);
            setToken(getUserHandler.data.token);
            localStorage.setItem("user", JSON.stringify(getUserHandler.data.user));
            localStorage.setItem("token", JSON.stringify(getUserHandler.data.token));
        }
    }, [getUserHandler]);

    useEffect(() => {
        if (getUserHandler.isError) {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            setUser(null);
            setToken(null);
            toast.error("Сесія вийшла");
        }
        if (getUserHandler.data) {
            setUser(getUserHandler.data.user);
            localStorage.setItem("user", JSON.stringify(getUserHandler.data.user));
        }
    }, [getUserHandler.data, getUserHandler.isError]);

    const values = useMemo(
        () => ({
            user,
            isAuthorized,
            setUser,
            token,
            setToken,
            refetchUser,
        }),
        [user, isAuthorized, token, refetchUser]
    );
    return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContextProvider;

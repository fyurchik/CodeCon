import { Link } from "@tanstack/react-router";
import { useContext } from "react";
import Button from "./ui/Button";
import { useLogout } from "@/api/auth/hooks";
import { UserContext } from "@/context/User";

const Header = () => {
    const { user, token, isAuthorized } = useContext(UserContext);
    const logoutHandler = useLogout();

    const onSubmit = async () => {
        await logoutHandler.mutateAsync(token);
    };

    return (
        <header className="fixed inset-x-0 top-0 z-[1000] flex flex-row items-center justify-between bg-card p-4 shadow-md md:px-8 lg:px-12">
            <p>
                <Link to="/">Logo</Link>
            </p>
            <nav>
                <ul className="flex flex-row items-center gap-16">
                    <li>
                        <Link to="/">Головна</Link>
                    </li>
                    <li>
                        <Link to="/applications/search">Пошук заявок</Link>
                    </li>
                    {isAuthorized && (
                        <Button onClick={onSubmit} size="sm" loading={logoutHandler.isPending}>
                            Вийти
                        </Button>
                    )}
                    {isAuthorized ? (
                        user?.role === "in_need" && (
                            <Button size="sm" asChild>
                                <Link to="/applications/create">Створити заявку</Link>
                            </Button>
                        )
                    ) : (
                        <Button size="sm" asChild>
                            <Link to="/auth/login">Увійти</Link>
                        </Button>
                    )}
                </ul>
            </nav>
        </header>
    );
};
export default Header;

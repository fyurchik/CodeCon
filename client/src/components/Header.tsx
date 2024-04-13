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
        <header className="border:[#D4D4D4] fixed inset-x-0 top-0 z-[1000] flex flex-row items-center justify-between bg-[#F5F5F5] p-4 opacity-80 shadow-md md:px-8 lg:px-12">
            <p>
                <Link to="/">Logo</Link>
            </p>
            <nav>
                <ul className="flex flex-row items-center gap-16">
                    <li>
                        <Link className="transition duration-300 hover:text-[#6B6B6B] " to="/">
                            Про сервіс
                        </Link>
                    </li>
                    <li>
                        <Link className="transition duration-300 hover:text-[#6B6B6B]" to="/">
                            Як працює
                        </Link>
                    </li>
                    <li>
                        <Link className="transition duration-300 hover:text-[#6B6B6B]" to="/">
                            Контакти
                        </Link>
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
                        <>
                            <Button size="lg" variant="secondary" asChild>
                                <Link to="/auth/login">Увійти</Link>
                            </Button>
                            <Button size="lg" variant="default" asChild>
                                <Link to="/auth/register">Зареєструватись</Link>
                            </Button>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};
export default Header;

import { Link } from "@tanstack/react-router";
import { useContext } from "react";
import Button from "./ui/Button";
import { useLogout } from "@/api/auth/hooks";
import { UserContext } from "@/context/User";
import Logo from "../assets/Logo.svg";

const Header = () => {
    const { user, token, isAuthorized } = useContext(UserContext);
    const logoutHandler = useLogout();

    const onSubmit = async () => {
        await logoutHandler.mutateAsync(token);
    };

    return (
        <header className="fixed inset-x-0 top-0 z-[1000] flex flex-row items-center justify-between border-b-[1px] border-[#D4D4D4] bg-background p-4 md:px-8 lg:px-12">
            <p>
                <Link to="/">
                    <img src={Logo} alt="logo" />
                </Link>
            </p>
            <nav>
                <ul className="flex flex-row items-center gap-12">
                    <li>
                        <Link className="transition duration-300 hover:text-[#6B6B6B] " to="/" hash="about">
                            Про сервіс
                        </Link>
                    </li>
                    <li>
                        <Link className="transition duration-300 hover:text-[#6B6B6B]" to="/" hash="how_works">
                            Як працює
                        </Link>
                    </li>
                    <li>
                        <Link className="transition duration-300 hover:text-[#6B6B6B]" to="/" hash="contacts">
                            Контакти
                        </Link>
                    </li>
                    {isAuthorized && (
                        <Link
                            className="transition duration-300 hover:text-[#6B6B6B]"
                            to="/applications/search"
                            search={{ urgency: "all", categories: ["Всі"] }}
                        >
                            Пошук заявок
                        </Link>
                    )}
                    {isAuthorized && (
                        <Link className="transition duration-300 hover:text-[#6B6B6B]" to="/cabinet">
                            Кабінет
                        </Link>
                    )}
                    {isAuthorized ? (
                        user?.role === "SimpleUser" && (
                            <Button size="sm" asChild>
                                <Link to="/applications/create">Створити заявку</Link>
                            </Button>
                        )
                    ) : (
                        <div className="flex gap-4">
                            <Button size="lg" variant="secondary" asChild>
                                <Link to="/auth/login">Увійти</Link>
                            </Button>
                            <Button size="lg" variant="default" asChild>
                                <Link to="/auth/register">Зареєструватись</Link>
                            </Button>
                        </div>
                    )}
                    {isAuthorized && (
                        <Button onClick={onSubmit} size="sm" loading={logoutHandler.isPending}>
                            Вийти
                        </Button>
                    )}
                </ul>
            </nav>
        </header>
    );
};
export default Header;

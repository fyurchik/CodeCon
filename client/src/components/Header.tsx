import { Link } from "@tanstack/react-router";
import Button from "./ui/Button";

const Header = () => {
    return (
        <header className="fixed inset-x-0 top-0 z-[1000] flex flex-row items-center justify-between bg-card p-4 shadow-md md:px-8 lg:px-12">
            <p>
                <Link to="/">Logo</Link>
            </p>
            <nav>
                <ul className="flex flex-row items-center gap-16">
                    <li>
                        <Link to="/applications/search">Пошук заявок</Link>
                    </li>
                    <li>
                        <Link to="/gathering">Збори</Link>
                    </li>
                    <li>
                        <Link to="/">Контакти</Link>
                    </li>
                    <Button size="sm">Створити заявку</Button>
                </ul>
            </nav>
        </header>
    );
};
export default Header;

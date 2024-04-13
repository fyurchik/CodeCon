import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { useContext } from "react";
import Header from "@/components/Header";
import { ThemeContext } from "@/context/Theme";
import Toaster from "@/ui/Toast";

const Page = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <Header />
            <main
                className={`
                    ${theme === "dark" ? "dark" : ""} relative mt-[68px] min-h-[calc(100vh_-_68px)] w-full grow bg-background p-4 text-foreground
                    sm:p-6
                    md:px-8 md:py-7
                    lg:px-36
                `}
            >
                <Outlet />
                <Toaster />
            </main>
        </>
    );
};

const NotFound = () => (
    <section
        className={`
            px-4 py-10 text-center
            sm:px-6
            lg:flex lg:h-full lg:flex-col lg:items-center lg:justify-center lg:px-8
        `}
    >
        <h1
            className={`
                block text-7xl font-bold text-gray-800
                dark:text-white
                sm:text-9xl
            `}
        >
            404
        </h1>
        <p
            className={`
                text-gray-600
                dark:text-gray-400
            `}
        >
            Looks like the page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link to="/">Back to home</Link>
    </section>
);

export const Route = createRootRoute({
    component: Page,
    notFoundComponent: NotFound,
});

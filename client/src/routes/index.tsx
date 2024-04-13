import { createFileRoute } from "@tanstack/react-router";

const Page = () => {
    return (
        <section>
            <p className="ml-[60px] mt-[60px] text-xl font-medium leading-4 text-[#A0A0A0]">благодійний застосунок</p>
        </section>
    );
};

export const Route = createFileRoute("/")({
    component: Page,
});

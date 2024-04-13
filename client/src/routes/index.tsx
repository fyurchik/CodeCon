import { healthcheck } from "@/api/auth/requests";
import { createFileRoute } from "@tanstack/react-router";

const Page = () => {
    healthcheck();
    return <div>hello</div>;
};

export const Route = createFileRoute("/")({
    component: Page,
});

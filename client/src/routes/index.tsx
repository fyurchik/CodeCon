import { createFileRoute } from "@tanstack/react-router";

const Page = () => {
    return <div>hello</div>;
};

export const Route = createFileRoute("/")({
    component: Page,
});

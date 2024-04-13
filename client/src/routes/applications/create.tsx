import { createFileRoute } from "@tanstack/react-router";

const Create = () => {
    return <div>Hello Create Page!</div>;
};

export const Route = createFileRoute("/applications/create")({
    component: Create,
});

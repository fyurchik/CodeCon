import { createFileRoute } from "@tanstack/react-router";

const Page = () => {
    return <div>Search Applications</div>;
};

export const Route = createFileRoute("/applications/search")({
    component: Page,
    // validateSearch: (search) => notesParamsSchema.parse(search),
});

import { createFileRoute } from "@tanstack/react-router";
import { z as zod } from "zod";
import ApplicationCard from "@/ui/ApplicationCard";
import Input from "@/ui/Input";

const Page = () => {
    const navigate = Route.useNavigate();
    const search = Route.useSearch();
    return (
        <section>
            <div className="mt-4 flex flex-col gap-8">
                <h1 className="text-4xl">Актуальні заявки про допомогу:</h1>
                <Input
                    placeholder="Пошук"
                    onChange={(e) => navigate({ search: (prev) => ({ ...prev, search: e.target.value }) })}
                    value={search.search}
                />
            </div>
            <div className="mt-6 flex flex-col gap-4">
                <ApplicationCard />
                <ApplicationCard />
                <ApplicationCard />
            </div>
        </section>
    );
};

const paramsSchema = zod.object({
    urgency: zod.enum(["urgent", "not_urgent", "all"]).catch("all"),
    city: zod.string().optional(),
    categories: zod.array(zod.string()).optional(),
    search: zod.string().optional(),
});

export const Route = createFileRoute("/applications/search")({
    component: Page,
    validateSearch: (search) => paramsSchema.parse(search),
});

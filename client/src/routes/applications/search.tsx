import { Link, createFileRoute } from "@tanstack/react-router";
import { useContext, useEffect } from "react";
import { z as zod } from "zod";
import { useApplications } from "@/api/applications/hooks";
import { UserContext } from "@/context/User";
import { useIntersection } from "@/hooks/useIntersection";
import ApplicationCard from "@/ui/ApplicationCard";
import Input from "@/ui/Input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/ui/Select";

const Page = () => {
    const { token } = useContext(UserContext);
    const navigate = Route.useNavigate();
    const search = Route.useSearch();
    const applications = useApplications(token);
    console.log(applications.data);
    const { isIntersecting, ref } = useIntersection({
        threshold: 0,
    });

    useEffect(() => {
        if (isIntersecting && applications.hasNextPage) void applications.fetchNextPage();
    }, [isIntersecting, applications]);
    return (
        <section>
            <aside className="fixed left-0 top-0 z-[999] flex h-screen w-72 flex-col gap-4 bg-card pl-8 pt-24">
                <div className="flex flex-col gap-2">
                    <h3 className="font-medium">Фільтри пошуку</h3>
                    <div className="flex flex-col gap-1">
                        <Link to="/applications/search" search={(prev) => ({ ...prev, urgency: "all" })}>
                            Всі
                        </Link>
                        <Link to="/applications/search" search={(prev) => ({ ...prev, urgency: "urgent" })}>
                            Термінові
                        </Link>
                        <Link to="/applications/search" search={(prev) => ({ ...prev, urgency: "not_urgent" })}>
                            Не термінові
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="font-medium">Місто</h3>
                    <Select
                        onValueChange={(e) =>
                            navigate({
                                to: "/applications/search",
                                search: (prev) => ({ ...prev, city: e }),
                            })
                        }
                    >
                        <SelectTrigger className="mt-3 placeholder:opacity-40">
                            <SelectValue placeholder="Оберіть Вашу облась" />
                        </SelectTrigger>
                        <SelectContent className="z-[2000]">
                            <SelectItem value="kyiv">Київська обл.</SelectItem>
                            <SelectItem value="lviv">Львівська обл.</SelectItem>
                            <SelectItem value="uzhorod">Ужгородська обл.</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="font-medium">Категорії</h3>
                </div>
            </aside>
            <section className="ml-56">
                <div className="mt-4 flex flex-col gap-8">
                    <h1 className="text-4xl">Актуальні заявки про допомогу:</h1>
                    <Input
                        placeholder="Пошук"
                        onChange={(e) => navigate({ search: (prev) => ({ ...prev, search: e.target.value }) })}
                        value={search.search}
                    />
                </div>
                <div className="mt-6 flex flex-col gap-4">
                    {applications.data?.pages.map((page) =>
                        page.results.map((application, i) =>
                            i === 4 ? (
                                <div ref={ref} key={application.id}>
                                    <ApplicationCard application={application} />
                                </div>
                            ) : (
                                <ApplicationCard key={application.id} application={application} />
                            )
                        )
                    )}
                </div>
            </section>
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

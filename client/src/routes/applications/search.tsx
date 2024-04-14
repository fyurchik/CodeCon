import { Link, createFileRoute } from "@tanstack/react-router";
import { useContext, useEffect } from "react";
import { z as zod } from "zod";
import { useApplications, useTags } from "@/api/applications/hooks";
import { UserContext } from "@/context/User";
import { useIntersection } from "@/hooks/useIntersection";
import ApplicationCard from "@/ui/ApplicationCard";
import Input from "@/ui/Input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/ui/Select";

const Page = () => {
    const { token } = useContext(UserContext);
    const navigate = Route.useNavigate();
    const search = Route.useSearch();
    const applications = useApplications(token, search.urgency, search.search, search.city, search.categories);
    const tags = useTags();
    const { isIntersecting, ref } = useIntersection({
        threshold: 0,
    });

    useEffect(() => {
        if (isIntersecting && applications.hasNextPage) {
            void applications.fetchNextPage();
        }
    }, [isIntersecting, applications]);
    return (
        <section>
            <aside className="fixed left-0 top-0 z-[999] flex h-screen flex-col gap-4 overflow-auto border-r-[1px] border-[#D4D4D4] pl-8 pr-[50px] pt-24">
                <div className="flex flex-col gap-2">
                    <h3 className="text-[28px] font-medium">Фільтри пошуку</h3>
                    <div className="flex flex-col gap-4">
                        <Link
                            to="/applications/search"
                            search={(prev) => ({ ...prev, urgency: "all" })}
                            className="inline-flex items-center justify-center gap-x-1.5 whitespace-nowrap rounded-3xl bg-secondary px-4 py-4 font-medium text-secondary-foreground shadow-sm ring-secondary-foreground ring-offset-background transition duration-500 hover:bg-[#E9EEE8] [&.active]:bg-primary [&.active]:text-white "
                        >
                            Всі
                        </Link>
                        <Link
                            to="/applications/search"
                            search={(prev) => ({ ...prev, urgency: "urgent" })}
                            className="inline-flex items-center justify-center gap-x-1.5 whitespace-nowrap rounded-3xl bg-secondary px-4 py-4 font-medium text-secondary-foreground shadow-sm ring-secondary-foreground ring-offset-background transition duration-500 hover:bg-[#E9EEE8] [&.active]:bg-primary [&.active]:text-white"
                        >
                            Термінові
                        </Link>
                        <Link
                            to="/applications/search"
                            search={(prev) => ({ ...prev, urgency: "not_urgent" })}
                            className="inline-flex items-center justify-center gap-x-1.5 whitespace-nowrap rounded-3xl bg-secondary px-4 py-4 font-medium text-secondary-foreground shadow-sm ring-secondary-foreground ring-offset-background transition duration-500 hover:bg-[#E9EEE8] [&.active]:bg-primary [&.active]:text-white"
                        >
                            Не термінові
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-[28px] font-medium">Місто</h3>
                    <Select
                        onValueChange={(e) =>
                            navigate({
                                to: "/applications/search",
                                search: (prev) => ({ ...prev, city: e }),
                            })
                        }
                    >
                        <SelectTrigger className="file:border-1 mt-3 flex h-16 w-full gap-2.5 rounded-full border border-[#D4D4D4] border-border bg-[#F5F5F5] bg-background p-7 px-3 py-2 text-sm ring-offset-background transition file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground placeholder:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-foreground focus-visible:ring-offset-0 disabled:cursor-not-allowed">
                            <SelectValue placeholder="Оберіть Вашу облась" />
                        </SelectTrigger>
                        <SelectContent className="z-[2000]">
                            <SelectItem value="kyjivska">Київська обл.</SelectItem>
                            <SelectItem value="kyiv">Київ</SelectItem>
                            <SelectItem value="lviv">Львівська обл.</SelectItem>
                            <SelectItem value="zakarpattia">Закарпатська обл.</SelectItem>
                            <SelectItem value="uzhorod">Ужгородська обл.</SelectItem>
                            <SelectItem value="volyn">Волинська обл.</SelectItem>
                            <SelectItem value="rivne">Рівненська обл.</SelectItem>
                            <SelectItem value="sumy">Сумська обл.</SelectItem>
                            <SelectItem value="ivano_frankivsk">Івано-Франківська обл.</SelectItem>
                            <SelectItem value="ternopil">Тернопільска обл.</SelectItem>
                            <SelectItem value="chernivtsi">Чернівецька обл.</SelectItem>
                            <SelectItem value="vinnytsia">Вінницька обл.</SelectItem>
                            <SelectItem value="khmelnytskyi">Хмельницька обл.</SelectItem>
                            <SelectItem value="zhytomyr">Житомирська обл.</SelectItem>
                            <SelectItem value="chernihiv">Чернігівська обл.</SelectItem>
                            <SelectItem value="kharkiv">Харківська обл.</SelectItem>
                            <SelectItem value="luhansk">Луганська обл.</SelectItem>
                            <SelectItem value="uzhorod">Донецька обл.</SelectItem>
                            <SelectItem value="zaporizhzhia">Запорізька обл.</SelectItem>
                            <SelectItem value="dnipropetrovsk">Дніпропетровська обл.</SelectItem>
                            <SelectItem value="kirovohrad">Кіровоградська обл.</SelectItem>
                            <SelectItem value="cherkasy">Черкаська обл.</SelectItem>
                            <SelectItem value="poltava">Полтавська обл.</SelectItem>
                            <SelectItem value="kherson">Херсонська обл.</SelectItem>
                            <SelectItem value="mykolaiv">Миколаївська обл.</SelectItem>
                            <SelectItem value="odesa">Одеська обл.</SelectItem>
                            <SelectItem value="crimea">Автономна республіка Крим</SelectItem>
                            <SelectItem value="sevastopol">Севастополь</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-[28px] font-medium">Категорії</h3>
                    <Link
                        to="/applications/search"
                        search={(prev) => ({ ...prev, categories: ["Всі"] })}
                        className="inline-flex items-center justify-center gap-x-1.5 whitespace-nowrap rounded-3xl bg-secondary px-4 py-4 font-medium text-secondary-foreground shadow-sm ring-secondary-foreground ring-offset-background transition duration-500 hover:bg-[#E9EEE8] [&.active]:bg-primary [&.active]:text-white"
                    >
                        Всі
                    </Link>
                    {tags.data?.tags.map((tag) => (
                        <Link
                            key={tag.id}
                            to="/applications/search"
                            search={(prev) => ({ ...prev, categories: [tag.name] })}
                            className="inline-flex items-center justify-center gap-x-1.5 whitespace-nowrap rounded-3xl bg-secondary px-4 py-4 font-medium text-secondary-foreground shadow-sm ring-secondary-foreground ring-offset-background transition duration-500 hover:bg-[#E9EEE8] [&.active]:bg-primary [&.active]:text-white"
                        >
                            {tag.name}
                        </Link>
                    ))}
                </div>
            </aside>
            <section className="ml-96 mr-12">
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
    categories: zod.array(zod.string()).optional().catch("Всі"),
    search: zod.string().optional(),
});

export const Route = createFileRoute("/applications/search")({
    component: Page,
    validateSearch: (search) => paramsSchema.parse(search),
});

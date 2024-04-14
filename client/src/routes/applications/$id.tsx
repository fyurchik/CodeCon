import { createFileRoute, Link } from "@tanstack/react-router";
import { CardContent, CardTitle } from "@/ui/Card";
import Button from "../../components/ui/Button";
import Badge from "@/ui/Badge";
import { useApplication } from "@/api/applications/hooks";
import { useContext } from "react";
import { UserContext } from "@/context/User";

const Create = () => {
    const { token } = useContext(UserContext);
    const params = Route.useParams();
    const data = useApplication(Number(params.id), token);
    return (
        <section className="ml-52 mt-20">
            <div className="mt-4 flex items-center gap-8">
                <Button variant="footer" size="lg" asChild>
                    <Link className="text-sm" to="/applications/search" search={{ urgency: "all", categories: "all" }}>
                        Повернутись до заявок
                    </Link>
                </Button>
            </div>
            <section className="mt-6">
                <CardContent className="pb-0 pl-0">
                    <h1 className="mt-6 text-4xl">Інформація про заявку:</h1>
                    {data.data?.results[0].urgent === "urgent" && (
                        <Badge
                            variant="destructive"
                            className="mb-10 mt-14 flex h-10 w-36 justify-center border-solid bg-[#8F0A0A]/10 text-base font-normal text-[#8F0A0A]"
                        >
                            Термінова
                        </Badge>
                    )}
                    <h1 className="mb-20 text-4xl font-medium">{data.data?.results[0].title}</h1>
                    <h4 className="mb-5 text-4xl font-normal">Детальніше:</h4>
                    <p className="mb-20 mt-10 text-2xl font-normal leading-7">{data.data?.results[0].content}</p>
                    <section className="mb-20 flex flex-row gap-20">
                        <div className="mb-10 mt-2 flex flex-col items-center">
                            <h4 className="mb-5 text-4xl font-normal">Вік</h4>
                            <Badge className="flex h-20 w-24 justify-center border-solid bg-[#FFFFFF] text-2xl font-normal leading-7 text-[#000000]">
                                {data.data?.results[0].age}
                            </Badge>
                        </div>
                        <div className=" mb-10 mt-2 flex flex-col items-center">
                            <h4 className="mb-5 text-4xl font-normal">Область</h4>
                            <Badge className="flex h-20 w-64 justify-center border-solid bg-[#FFFFFF] text-center text-2xl font-normal leading-7 text-[#000000]">
                                {data.data?.results[0].city}
                            </Badge>
                        </div>
                    </section>
                    {data.data?.results[0].tags.length > 0 && (
                        <section className="mb-20 flex w-[870px] flex-col gap-5">
                            <h4 className="mb-5 text-4xl font-normal">Категорії</h4>
                            <div className="mt-6 flex flex-wrap gap-6">
                                {data.data?.results[0].tags.map((tag) => (
                                    <Badge
                                        key={tag}
                                        className="flex h-20 w-64 justify-center border-solid border-[#D4D4D4] bg-[#F5F5F5] text-center text-2xl font-normal leading-7 text-[#000000]"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </section>
                    )}
                    <section className="flex-column w-[701px] gap-6">
                        <h4 className="mb-10 text-4xl font-normal">Контакти для зв’язку</h4>
                        <div className="mt-6 flex flex-row gap-6">
                            <div className="h-[134px] w-[308px] flex-col items-center gap-20 space-y-5">
                                <CardTitle className="text-xl font-medium leading-6">Номер телефону:</CardTitle>
                                <Badge className="mb-10 mt-2 flex h-20 w-64 justify-center border-solid border-[#D4D4D4] bg-[#158F0A] text-center text-2xl font-normal leading-7 text-[#FFFFFF]">
                                    {data.data?.results[0].phone_number}
                                </Badge>
                            </div>
                            <div className="h-[134px] w-[308px] flex-col items-center gap-20 space-y-5">
                                <CardTitle className="items-center text-xl font-medium leading-6">
                                    Електронна пошта:
                                </CardTitle>
                                <Badge className="mb-10 mt-2 flex h-20 justify-center border-solid border-[#D4D4D4] bg-[#158F0A] text-center text-2xl font-normal leading-7 text-[#FFFFFF]">
                                    {data.data?.results[0].email}
                                </Badge>
                            </div>
                        </div>
                    </section>
                </CardContent>
            </section>
        </section>
    );
};

export const Route = createFileRoute("/applications/$id")({
    component: Create,
});

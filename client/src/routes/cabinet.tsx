import { zodResolver } from "@hookform/resolvers/zod";
import { Link, createFileRoute } from "@tanstack/react-router";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useMyApplications } from "@/api/applications/hooks";
import { UserContext } from "@/context/User";
import { BaseUserSchema, baseUserSchema } from "@/types/auth";
import ApplicationCard from "@/ui/ApplicationCard";
import Badge from "@/ui/Badge";
import Button from "@/ui/Button";
import { CardHeader, CardContent, CardTitle } from "@/ui/Card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/ui/Form";
import VectorImg from "../assets/Vector.svg";
import PenImg from "../assets/pen.svg";
import Input from "@/ui/Input";
import { useUpdateUserData } from "@/api/auth/hooks";

const Page = () => {
    const { user, token, setUser } = useContext(UserContext);
    const form = useForm<BaseUserSchema>({
        resolver: zodResolver(baseUserSchema),
        defaultValues: {
            firstName: user?.first_name,
            lastName: user?.last_name,
            email: user?.email,
        },
    });

    const applications = useMyApplications(token);

    const onSubmit = async (values: BaseUserSchema) => {
        setUser({ ...user, first_name: values.firstName, last_name: values.lastName });
        localStorage.setItem(
            "user",
            JSON.stringify({ ...user, first_name: values.firstName, last_name: values.lastName })
        );
    };

    return (
        <section className="ml-52 mt-20">
            <div className="mt-4 flex items-center gap-8">
                <h1 className="text-6xl font-normal">
                    Вітаю, {user?.first_name} {user?.last_name}
                </h1>
                {user?.role === "SimpleUser" ? (
                    <Badge className="mt-3 flex h-10 w-44 justify-center bg-[#158F0A] bg-[#158F0A]/10 text-[#158F0A]">
                        Потребую допомоги
                    </Badge>
                ) : (
                    <Badge className="mt-3 flex h-10 w-44 justify-center bg-[#158F0A] bg-[#158F0A]/10 text-[#158F0A]">
                        Допомагаю людям
                    </Badge>
                )}
            </div>
            <section className="mt-6">
                <div className=" w-full max-w-md">
                    <CardHeader className="px-0">
                        <CardTitle className="font-normal">Базова інформація:</CardTitle>
                    </CardHeader>
                    <CardContent className="px-0">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="grid max-w-sm gap-4">
                                <div className="flex grow flex-row gap-4">
                                    <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-xl font-normal leading-6">
                                                    Ваше ім&apos;я:
                                                </FormLabel>
                                                <FormControl>
                                                    <div className="relative">
                                                        <Input
                                                            className="w-[420px] p-7"
                                                            placeholder="Введіть Ваше ім'я:"
                                                            {...field}
                                                        />
                                                        <img
                                                            className="absolute right-4 top-5 "
                                                            src={PenImg}
                                                            alt="penImg"
                                                        />
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-xl font-normal leading-6">
                                                    Ваше прізвище:
                                                </FormLabel>
                                                <FormControl>
                                                    <div className="relative">
                                                        <Input
                                                            className="w-[420px] p-7"
                                                            placeholder="Введіть Ваше прізвище:"
                                                            {...field}
                                                        />
                                                        <img
                                                            className="absolute right-4 top-5 "
                                                            src={PenImg}
                                                            alt="penImg"
                                                        />
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex flex-row items-end gap-4">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Електронна пошта:</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className="w-[420px] p-7"
                                                        placeholder="mail@example.com"
                                                        disabled
                                                        readOnly
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="h-16 w-[420px]"
                                        loading={form.formState.isSubmitting}
                                    >
                                        Зберегти зміни
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </CardContent>
                </div>
            </section>
            {user?.role === "SimpleUser" && (
                <section className="flex max-w-5xl flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <h2 className="mt-6 text-2xl font-medium">Актуальні заявки:</h2>
                        <Button asChild>
                            <Link to="/applications/create">Створити заявку</Link>
                        </Button>
                    </div>
                    {applications.data?.results && applications.data?.results.length < 1 ? (
                        <>
                            <img className="h-[293px] w-[293px] self-center" src={VectorImg} alt="noMessagesIcon" />
                            <p className="text-center">Тут поки порожньо...</p>
                        </>
                    ) : (
                        applications.data?.results.map((application) => (
                            <ApplicationCard key={application.id} application={application} />
                        ))
                    )}
                </section>
            )}
        </section>
    );
};

export const Route = createFileRoute("/cabinet")({
    component: Page,
});

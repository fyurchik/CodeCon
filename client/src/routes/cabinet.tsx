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
import { Card, CardHeader, CardContent, CardTitle } from "@/ui/Card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/ui/Form";
import Input from "@/ui/Input";

const Page = () => {
    const { user, token } = useContext(UserContext);
    const form = useForm<BaseUserSchema>({
        resolver: zodResolver(baseUserSchema),
        defaultValues: {
            firstName: user?.first_name,
            lastName: user?.last_name,
            email: user?.email,
        },
    });

    const applications = useMyApplications(token);

    const onSubmit = (values: BaseUserSchema) => {
        console.log(values);
        // signUpHandler.mutate({ email: values.email, password: values.password });
    };

    return (
        <section className="ml-52 mt-20">
            <div className="mt-4 flex items-center gap-8">
                <h1 className="text-6xl font-normal">
                    Вітаю, {user?.first_name} {user?.last_name}
                </h1>
                {user?.role === "SimpleUser" ? (
                    <Badge className=" flex h-10 w-52 justify-center bg-[#158F0A] bg-[#158F0A]/10 text-[#158F0A]">
                        Потребую допомоги
                    </Badge>
                ) : (
                    <Badge className="flex h-10 w-52 justify-center bg-[#158F0A] bg-[#158F0A]/10 text-[#158F0A]">
                        Допомагаю
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
                                                <FormLabel>Ваше ім&apos;я:</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Петро" {...field} />
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
                                                <FormLabel>Ваше прізвище:</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Петренко" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Електронна пошта:</FormLabel>
                                            <FormControl>
                                                <Input placeholder="mail@example.com" disabled readOnly {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </form>
                        </Form>
                    </CardContent>
                </div>
            </section>
            {user?.role === "SimpleUser" && (
                <section className="flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <h2 className="mt-6 text-2xl font-medium">Актуальні заявки:</h2>
                        <Button asChild>
                            <Link to="/applications/create">Створити заявку</Link>
                        </Button>
                    </div>
                    {applications.data?.results.length < 1 ? (
                        <p className="text-center">Тут поки порожньо...</p>
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

import { zodResolver } from "@hookform/resolvers/zod";
import { Link, createFileRoute } from "@tanstack/react-router";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "@/context/User";
import { BaseUserSchema, baseUserSchema } from "@/types/auth";
import ApplicationCard from "@/ui/ApplicationCard";
import Button from "@/ui/Button";
import { Card, CardHeader, CardContent, CardTitle } from "@/ui/Card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/ui/Form";
import Input from "@/ui/Input";

const Page = () => {
    const { user } = useContext(UserContext);
    const form = useForm<BaseUserSchema>({
        resolver: zodResolver(baseUserSchema),
        defaultValues: {
            firstName: user?.first_name,
            lastName: user?.last_name,
            email: user?.email,
        },
    });

    const onSubmit = (values: BaseUserSchema) => {
        console.log(values);
        // signUpHandler.mutate({ email: values.email, password: values.password });
    };

    return (
        <section>
            <div className="mt-4 flex items-center gap-8">
                <h1 className="text-4xl">
                    Вітаю, {user?.first_name} {user?.last_name}
                </h1>
                {user?.role === "SimpleUser" ? <Button>Потребую допомоги</Button> : <Button>Допомагаю</Button>}
            </div>
            <section className="mt-6">
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle>Базова інформація</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="grid max-w-sm gap-4">
                                <div className="flex grow flex-row gap-4">
                                    <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Ім&apos;я</FormLabel>
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
                                                <FormLabel>Прізвище</FormLabel>
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
                                            <FormLabel>Електронна пошта</FormLabel>
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
                </Card>
            </section>
            {user?.role === "SimpleUser" && (
                <section className="flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <h2 className="mt-6 text-2xl font-medium">Актуальні заявки:</h2>
                        <Button asChild>
                            <Link to="/applications/create">Створити заявку</Link>
                        </Button>
                    </div>
                    {/* <p className="text-center">Тут поки порожньо...</p> */}
                    <ApplicationCard
                        application={{
                            email: "asdddsadasd@example.com",
                            phone_number: "=380778889900",
                            active: true,
                            age: 19,
                            city: "Lviv",
                            content: "What da fak is dis",
                            id: 24,
                            tags: [1, 2],
                            title: "Dafak",
                            urgent: "urgent",
                            user: 24,
                        }}
                    />
                </section>
            )}
        </section>
    );
};

export const Route = createFileRoute("/cabinet")({
    component: Page,
});

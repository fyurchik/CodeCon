import { zodResolver } from "@hookform/resolvers/zod";
import { Link, createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { BaseUserSchema, baseUserSchema } from "@/types/auth";
import Button from "@/ui/Button";
import { Card, CardHeader, CardContent, CardTitle } from "@/ui/Card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/ui/Form";
import Input from "@/ui/Input";

const Page = () => {
    const form = useForm<BaseUserSchema>({
        resolver: zodResolver(baseUserSchema),
        defaultValues: {
            firstName: "Петро",
            lastName: "Петренко",
            email: "example@mail.com",
        },
    });

    const onSubmit = (values: BaseUserSchema) => {
        console.log(values);
        // signUpHandler.mutate({ email: values.email, password: values.password });
    };

    return (
        <section>
            <Link to="/" className="underline">
                Повернутись на головну
            </Link>
            <div className="mt-4 flex items-center gap-8">
                <h1 className="text-4xl">Вітаю, username</h1>
                <Button>Потребую допомоги</Button>
            </div>
            <section className="mt-6">
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle className="text-2xl">Базова інформація</CardTitle>
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
        </section>
    );
};

export const Route = createFileRoute("/cabinet")({
    component: Page,
});

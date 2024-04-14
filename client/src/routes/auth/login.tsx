import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { useLogin } from "@/api/auth/hooks";
import { loginSchema, LoginSchema } from "@/types/auth";
import Button from "@/ui/Button";
import { Card, CardHeader, CardContent, CardTitle } from "@/ui/Card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/ui/Form";
import Input from "@/ui/Input";

const Page = () => {
    const formLogin = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const loginHandler = useLogin();

    const onSubmit = async (values: LoginSchema) => {
        await loginHandler.mutateAsync(values);
    };

    return (
        <Card className="mx-auto w-full max-w-md rounded-3xl md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            <CardHeader>
                <CardTitle className="mb-20 text-center text-2xl">logo</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...formLogin}>
                    <form onSubmit={formLogin.handleSubmit(onSubmit)} className="grid gap-4">
                        <FormField
                            control={formLogin.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Електронна пошта" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={formLogin.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input {...field} type="password" placeholder="Пароль" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            size="lg"
                            className="mb-8 mt-8 h-16"
                            loading={formLogin.formState.isSubmitting}
                        >
                            Увійти
                        </Button>
                    </form>
                </Form>
                <div className="mt-4 flex flex-row items-center justify-between gap-2 px-10">
                    <p className="text-center text-sm">Не маєте аккаунту? </p>
                    <Link to="/auth/register" className="underline transition duration-300 hover:text-[#6B6B6B]">
                        Зареєструватись
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
};

export const Route = createFileRoute("/auth/login")({
    component: Page,
});

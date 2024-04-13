import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
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

    // const signUpHandler = useSignUp();

    const onSubmit = (values: LoginSchema) => {
        console.log(values);

        // signUpHandler.mutate({ email: values.email, password: values.password });
    };

    return (
        <Card className="mx-auto w-full max-w-md md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            <CardHeader>
                <CardTitle className="text-2xl">Увійти в аккаунт</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...formLogin}>
                    <form onSubmit={formLogin.handleSubmit(onSubmit)} className="grid gap-4">
                        <FormField
                            control={formLogin.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Електронна пошта</FormLabel>
                                    <FormControl>
                                        <Input placeholder="mail@example.com" {...field} />
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
                                    <FormLabel>Пароль</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="password" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" loading={formLogin.formState.isSubmitting}>
                            Увійти
                        </Button>
                    </form>
                </Form>
                <p className="mt-4 text-center text-sm">
                    Не маєте аккаунту?{" "}
                    <Link to="/auth/register" className="underline">
                        Зареєструватись
                    </Link>
                </p>
            </CardContent>
        </Card>
    );
};

export const Route = createFileRoute("/auth/login")({
    component: Page,
});

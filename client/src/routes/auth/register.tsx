import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Logo from "../../assets/Logo.svg";
import { useRegister } from "@/api/auth/hooks";
import { registerSchema, RegisterSchema } from "@/types/auth";
import Button from "@/ui/Button";
import { Card, CardHeader, CardContent } from "@/ui/Card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/ui/Form";
import Input from "@/ui/Input";
import { RadioGroup, RadioGroupItem } from "@/ui/Radio";

const Page = () => {
    const form = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            role: "volonteer",
            password: "",
            confirmPassword: "",
        },
    });

    const registerHandler = useRegister();

    const onSubmit = async (values: RegisterSchema) => {
        await registerHandler.mutateAsync(values);
        form.reset();
    };

    useEffect(() => {
        document.querySelector("header")?.remove();
    }, []);
    return (
        <Card className="mx-auto w-full max-w-md md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            <CardHeader>
                <Link to="/" className="mb-20 self-center">
                    <img src={Logo} alt="logo" />
                </Link>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
                        <div className="flex grow flex-row gap-4">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Ім'я" {...field} className="pl-5" />
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
                                        <FormControl>
                                            <Input placeholder="Прізвище" {...field} className="pl-5" />
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
                                    <FormControl>
                                        <Input placeholder="Електронна пошта" {...field} className="pl-5" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input {...field} type="password" placeholder="Пароль" className="pl-5" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="password"
                                            placeholder="Підтвердити пароль"
                                            className="mb-5 pl-5"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <section className="mb-10 flex flex-col gap-4">
                            <h4 className="mb-2 block font-normal ">Ти людина, що потребує...</h4>
                            <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem className="flex w-min flex-row items-start space-x-3 space-y-0 rounded-md border">
                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className="flex h-24 w-[376px] flex-col justify-center space-y-1"
                                            >
                                                <FormItem className="mb-5 flex items-center space-x-3 space-y-0 pl-5">
                                                    <FormControl>
                                                        <RadioGroupItem value="in_need" />
                                                    </FormControl>
                                                    <FormLabel className=" font-normal ">потребує допомоги</FormLabel>
                                                </FormItem>
                                                <FormItem className="mb-5 flex items-center space-x-3 space-y-0 pl-5">
                                                    <FormControl>
                                                        <RadioGroupItem value="volunteer" />
                                                    </FormControl>
                                                    <FormLabel className=" font-normal ">може допомогти</FormLabel>
                                                </FormItem>
                                            </RadioGroup>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </section>

                        <Button type="submit" size="lg" className="mb-8 h-16" loading={form.formState.isSubmitting}>
                            Зареєструватись
                        </Button>
                    </form>
                </Form>
                <div className=" flex flex-row items-center justify-between px-24">
                    <p className="text-center text-sm">Вже є акаунт?</p>
                    <Link to="/auth/login" className="underline transition duration-300 hover:text-[#6B6B6B]">
                        Увійти
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
};

export const Route = createFileRoute("/auth/register")({
    component: Page,
});

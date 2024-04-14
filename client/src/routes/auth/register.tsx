import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { useRegister } from "@/api/auth/hooks";
import { registerSchema, RegisterSchema } from "@/types/auth";
import Button from "@/ui/Button";
import { Card, CardHeader, CardContent, CardTitle } from "@/ui/Card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/ui/Form";
import Input from "@/ui/Input";
import { RadioGroup, RadioGroupItem } from "@/ui/Radio";
import { useEffect } from "react";

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
                <CardTitle className="mb-20 text-center text-2xl">Реєстрація</CardTitle>
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
                                            <Input placeholder="Ім'я" {...field} />
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
                                            <Input placeholder="Прізвище" {...field} />
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
                                        <Input placeholder="Електронна пошта" {...field} />
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
                                        <Input {...field} type="password" placeholder="Пароль" />
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
                                            className="mb-10"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                                <FormItem className="mb-4 space-y-3">
                                    <FormLabel className="mb-7 block font-normal">Ти людина, що потребує...</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-row justify-between"
                                        >
                                            <FormItem className=" ">
                                                <FormControl>
                                                    <RadioGroupItem value="in_need" className="peer hidden" />
                                                </FormControl>
                                                <FormLabel className="peer- flex h-16 w-full items-center  space-y-0  rounded-bl-full rounded-tl-full px-10  text-center font-normal peer-data-[state=checked]:bg-[#158F0A33]">
                                                    потребує допомоги
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="">
                                                <FormControl>
                                                    <RadioGroupItem value="volonteer" className="peer hidden" />
                                                </FormControl>
                                                <FormLabel className="flex h-16 w-full items-center space-y-0  rounded-br-full rounded-tr-full px-10 text-center font-normal peer-data-[state=checked]:bg-[#158F0A33]">
                                                    може допомогти
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

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

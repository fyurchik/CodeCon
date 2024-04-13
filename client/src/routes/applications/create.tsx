import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { aplicationSchema, AplicationSchema } from "@/types/aplication";
import { CardContent, CardTitle, CardDescription } from "@/ui/Card";
import { FormMessage, Form, FormControl, FormField, FormItem, FormLabel } from "@/ui/Form";
import Input from "@/ui/Input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/ui/Select";
import { Textarea } from "@/ui/Textarea";
import { Checkbox } from "@/ui/Сheckbox";
import Button from "@/ui/Button";
import { RadioGroup, RadioGroupItem } from "@/ui/Radio";

const Create = () => {
    const form = useForm<AplicationSchema>({
        resolver: zodResolver(aplicationSchema),
        defaultValues: {
            requestArea: "",
            desciptionArea: "",
            age: 0,
            city: "",
            categories: [],
            urgency: "not_urgent",
            contactPhone: "",
            contactEmail: "",
        },
    });

    const onSubmit = (values: AplicationSchema) => {
        console.log(values);

        // signUpHandler.mutate({ email: values.email, password: values.password });
    };

    return (
        <section>
            <div className="mt-4 flex items-center gap-8">
                <h1 className="text-4xl">Інформація про заявку:</h1>
            </div>
            <section className="mt-6">
                <CardContent>
                    <Form {...form}>
                        <form className="grid w-full gap-4" onSubmit={form.handleSubmit(onSubmit)}>
                            <section className="mt-6">
                                <h4 className="text-xl">Ваш запит</h4>
                                <FormField
                                    control={form.control}
                                    name="requestArea"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Input
                                                className="mt-3 w-full placeholder:opacity-40"
                                                {...field}
                                                placeholder="Короткий опис вашого запиту введіть тут:"
                                            />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </section>
                            <section className="mt-6">
                                <h4 className="text-xl">Опис</h4>
                                <FormField
                                    control={form.control}
                                    name="desciptionArea"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Textarea
                                                className="mt-3 w-full placeholder:opacity-40"
                                                {...field}
                                                rows={8}
                                                placeholder="Розкажіть більш детально, що Вам потрібно тут:"
                                            />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </section>
                            <section className="mt-6 flex flex-row gap-6">
                                <div className="grow">
                                    <h4 className="text-xl">Вік</h4>
                                    <FormField
                                        control={form.control}
                                        name="age"
                                        render={({ field }) => (
                                            <FormItem>
                                                <Input
                                                    className="mt-3 placeholder:opacity-40"
                                                    {...field}
                                                    placeholder="Введіть, будь ласка, ваш вік"
                                                    type="number"
                                                    max={3}
                                                />
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="grow">
                                    <h4 className="text-xl">Область</h4>
                                    <FormField
                                        control={form.control}
                                        name="city"
                                        render={({ field }) => (
                                            <FormItem>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="mt-3 placeholder:opacity-40">
                                                            <SelectValue placeholder="Оберіть Вашу облась" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="kyiv">Київська обл.</SelectItem>
                                                        <SelectItem value="lviv">Львівська обл.</SelectItem>
                                                        <SelectItem value="uzhorod">Ужгородська обл.</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </section>
                            <section className="mt-6">
                                <h4 className="text-xl">Категорії</h4>
                                <FormField
                                    control={form.control}
                                    name="categories"
                                    render={({ field }) => (
                                        <FormItem className="mt-3 flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                            <FormControl>
                                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                            </FormControl>
                                            <div className="space-y-1 leading-none">
                                                <FormLabel>Use different settings for my mobile devices</FormLabel>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </section>
                            <section className="mt-6">
                                <h4 className="text-xl">Терміновість</h4>
                                <CardDescription>На скільки терміновий ваш запит про допомогу?</CardDescription>
                                <FormField
                                    control={form.control}
                                    name="urgency"
                                    render={({ field }) => (
                                        <FormItem className="mt-3 flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                            <FormControl>
                                                <RadioGroup
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    className="flex flex-col space-y-1"
                                                >
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="urgent" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">Терміновий</FormLabel>
                                                    </FormItem>
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="not_urgent" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">Не дуже терміново</FormLabel>
                                                    </FormItem>
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </section>
                            <section className="mt-6 flex-col gap-6">
                                <h4 className="text-xl">Контакти</h4>
                                <CardDescription>
                                    Введіть будь ласка контакти, за якими до вас можна буде звернутись
                                </CardDescription>
                                <div className="mt-6 flex flex-row gap-6">
                                    <div className="grow">
                                        <CardTitle className="text-sm">Номер телефону</CardTitle>

                                        <FormField
                                            control={form.control}
                                            name="contactPhone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <Input
                                                        className="mt-3 placeholder:opacity-40"
                                                        {...field}
                                                        placeholder="Введіть Ваш номер телефону тут:"
                                                    />
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="grow">
                                        <CardTitle className="text-sm">Електронна пошта</CardTitle>

                                        <FormField
                                            control={form.control}
                                            name="contactEmail"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <Input
                                                        className="mt-3 placeholder:opacity-40"
                                                        {...field}
                                                        placeholder="Введіть Вашу електронну адресу тут:"
                                                    />
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>
                            </section>
                            <Button type="submit" className="mt-6">
                                Опублікувати заявку
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </section>
        </section>
    );
};

export const Route = createFileRoute("/applications/create")({
    component: Create,
});

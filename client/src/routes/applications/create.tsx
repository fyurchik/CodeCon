import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { aplicationSchema, AplicationSchema } from "@/types/aplication";
import { CardHeader, CardContent, CardTitle, CardDescription } from "@/ui/Card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/ui/Form";
import Input from "@/ui/Input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/ui/Select";
import { Textarea } from "@/ui/Textarea";
import { Checkbox } from "@/ui/Сheckbox";

const Create = () => {
    const form = useForm<AplicationSchema>({
        resolver: zodResolver(aplicationSchema),
        defaultValues: {
            requestArea: "",
            desciptionArea: "",
            age: 0,
            city: "",
            categories: [],
        },
    });

    return (
        <section>
            <div className="mt-4 flex items-center gap-8">
                <h1 className="text-4xl">Інформація про заявку:</h1>
            </div>
            <section className="mt-6">
                <CardContent>
                    <Form {...form}>
                        <form className="grid w-full gap-4">
                            <section className="mt-6">
                                <h4>Ваш запит</h4>
                                <CardDescription>Короткий опис вашого запиту введіть тут:</CardDescription>
                                <FormField
                                    control={form.control}
                                    name="requestArea"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Input className="mt-6 w-full" {...field} />
                                        </FormItem>
                                    )}
                                />
                            </section>
                            <section className="mt-6">
                                <h4>Опис</h4>
                                <CardDescription>Розкажіть більш детально, що вам потрібно</CardDescription>

                                <FormField
                                    control={form.control}
                                    name="desciptionArea"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Textarea className="mt-6 w-full" {...field} rows={8} />
                                        </FormItem>
                                    )}
                                />
                            </section>
                            <section className="mt-6 flex flex-row gap-6">
                                <div className="grow">
                                    <h4>Вік</h4>
                                    <CardDescription>Введіть, будь ласка, ваш вік</CardDescription>

                                    <FormField
                                        control={form.control}
                                        name="age"
                                        render={({ field }) => (
                                            <FormItem>
                                                <Input className="mt-6" {...field} />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="grow">
                                    <h4>Місто</h4>
                                    <CardDescription>Оберіть, будь ласка, ваше місто</CardDescription>

                                    <FormField
                                        control={form.control}
                                        name="city"
                                        render={({ field }) => (
                                            <FormItem>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="mt-6">
                                                            <SelectValue placeholder="Оберіть Ваш обласний центр" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="kyiv">Київ</SelectItem>
                                                        <SelectItem value="lviv">Львів</SelectItem>
                                                        <SelectItem value="uzhorod">Ужгород</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <section className="mt-6">
                                    <h4>Категорії</h4>
                                    <CardDescription>Оберіть</CardDescription>

                                    <FormField
                                        control={form.control}
                                        name="categories"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                                <FormControl>
                                                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormLabel>Use different settings for my mobile devices</FormLabel>
                                                </div>
                                            </FormItem>
                                        )}
                                    />
                                </section>
                            </section>
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

import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { CardHeader, CardContent, CardTitle, CardDescription } from "@/ui/Card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/ui/Form";
import { Textarea } from "@/ui/Textarea";
import { aplicationSchema, AplicationSchema } from "@/types/aplication";
import Input from "@/ui/Input";

const Create = () => {
    const form = useForm<AplicationSchema>({
        resolver: zodResolver(aplicationSchema),
        defaultValues: {
            requestArea: "Введіть текст",
            desciptionArea: "Введіть текст",
            age: 18,
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
                                            <Input className="mt-6 w-full" {...field}></Input>
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
                                            <Textarea className="mt-6 w-full" {...field} rows={8}></Textarea>
                                        </FormItem>
                                    )}
                                />
                            </section>
                            <section className="mt-6 flex flex-row gap-6">
                                <div className="flex-grow">
                                    <h4>Вік</h4>
                                    <CardDescription>Введіть, будь ласка, ваш вік</CardDescription>

                                    <FormField
                                        control={form.control}
                                        name="age"
                                        render={({ field }) => (
                                            <FormItem>
                                                <Input className="mt-6" {...field}></Input>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex-grow">
                                    <h4>Вік</h4>
                                    <CardDescription>Введіть, будь ласка, ваш вік</CardDescription>

                                    <FormField
                                        control={form.control}
                                        name="age"
                                        render={({ field }) => (
                                            <FormItem>
                                                <Input className="mt-6" {...field}></Input>
                                            </FormItem>
                                        )}
                                    />
                                </div>
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

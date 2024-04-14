import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useCreateApplication } from "@/api/applications/hooks";
import { UserContext } from "@/context/User";
import { aplicationSchema, AplicationSchema } from "@/types/aplication";
import Button from "@/ui/Button";
import { CardContent, CardTitle, CardDescription } from "@/ui/Card";
import { FormMessage, Form, FormControl, FormField, FormItem, FormLabel } from "@/ui/Form";
import Input from "@/ui/Input";
import { RadioGroup, RadioGroupItem } from "@/ui/Radio";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/ui/Select";
import { Textarea } from "@/ui/Textarea";
import Badge from "@/ui/Badge";

const Create = () => {
    const { token, user } = useContext(UserContext);
    const form = useForm<AplicationSchema>({
        resolver: zodResolver(aplicationSchema),
        defaultValues: {
            title: "",
            content: "",
            age: 0,
            city: "",
            // categories: [],
            urgent: "not_urgent",
            phone_number: "",
            email: "",
        },
    });

    const createApplicationHandler = useCreateApplication(token);

    const onSubmit = async (values: AplicationSchema) => {
        // @ts-expect-error too lazy to add types
        await createApplicationHandler.mutateAsync({ ...values, urgent: values.urgent, user: user.id });
    };

    return (
        <section className="mb-[60px] ml-[213px] mr-[519px] mt-20">
            <div className="mt-4 flex items-center gap-8">
                <h1 className="text-6xl font-normal leading-[76.8px]">Інформація про заявку:</h1>
            </div>
            <section className="mt-6">
                <CardContent className="p-0">
                    <Form {...form}>
                        <form className="grid w-full gap-4" onSubmit={form.handleSubmit(onSubmit)}>
                            <section className="mt-6">
                                <h4 className="text-4xl font-normal leading-[43.2px]">Ваш запит</h4>
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Input
                                                className="mt-3 w-full p-7 placeholder:opacity-40"
                                                {...field}
                                                placeholder="Короткий опис вашого запиту введіть тут:"
                                            />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </section>
                            <section className="mb-20 mt-6">
                                <h4 className="text-4xl font-normal leading-[43.2px]">Опис</h4>
                                <FormField
                                    control={form.control}
                                    name="content"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Textarea
                                                className="mt-3 w-full p-7 placeholder:opacity-40"
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
                                    <h4 className="text-4xl font-normal leading-[43.2px]">Вік</h4>
                                    <FormField
                                        control={form.control}
                                        name="age"
                                        render={({ field }) => (
                                            <FormItem>
                                                <Input
                                                    className="mt-3 p-7 placeholder:opacity-40"
                                                    {...field}
                                                    placeholder="Введіть, будь ласка, ваш вік"
                                                    type="number"
                                                    max={120}
                                                />
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="mb-20 grow">
                                    <h4 className="text-4xl font-normal leading-[43.2px]">Область</h4>
                                    <FormField
                                        control={form.control}
                                        name="city"
                                        render={({ field }) => (
                                            <FormItem>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="file:border-1 mt-3 flex h-16 w-full gap-2.5 rounded-full border border-[#D4D4D4] border-border bg-[#F5F5F5] bg-background p-7 px-3 py-2 text-sm ring-offset-background transition file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground placeholder:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-foreground focus-visible:ring-offset-0 disabled:cursor-not-allowed">
                                                            <SelectValue placeholder="Оберіть Вашу облась" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="kyjivska">Київська обл.</SelectItem>
                                                        <SelectItem value="kyiv">Київ</SelectItem>
                                                        <SelectItem value="lviv">Львівська обл.</SelectItem>
                                                        <SelectItem value="zakarpattia">Закарпатська обл.</SelectItem>
                                                        <SelectItem value="uzhorod">Ужгородська обл.</SelectItem>
                                                        <SelectItem value="volyn">Волинська обл.</SelectItem>
                                                        <SelectItem value="rivne">Рівненська обл.</SelectItem>
                                                        <SelectItem value="sumy">Сумська обл.</SelectItem>
                                                        <SelectItem value="ivano_frankivsk">
                                                            Івано-Франківська обл.
                                                        </SelectItem>
                                                        <SelectItem value="ternopil">Тернопільска обл.</SelectItem>
                                                        <SelectItem value="chernivtsi">Чернівецька обл.</SelectItem>
                                                        <SelectItem value="vinnytsia">Вінницька обл.</SelectItem>
                                                        <SelectItem value="khmelnytskyi">Хмельницька обл.</SelectItem>
                                                        <SelectItem value="zhytomyr">Житомирська обл.</SelectItem>
                                                        <SelectItem value="chernihiv">Чернігівська обл.</SelectItem>
                                                        <SelectItem value="kharkiv">Харківська обл.</SelectItem>
                                                        <SelectItem value="luhansk">Луганська обл.</SelectItem>
                                                        <SelectItem value="uzhorod">Донецька обл.</SelectItem>
                                                        <SelectItem value="zaporizhzhia">Запорізька обл.</SelectItem>
                                                        <SelectItem value="dnipropetrovsk">
                                                            Дніпропетровська обл.
                                                        </SelectItem>
                                                        <SelectItem value="kirovohrad">Кіровоградська обл.</SelectItem>
                                                        <SelectItem value="cherkasy">Черкаська обл.</SelectItem>
                                                        <SelectItem value="poltava">Полтавська обл.</SelectItem>
                                                        <SelectItem value="kherson">Херсонська обл.</SelectItem>
                                                        <SelectItem value="mykolaiv">Миколаївська обл.</SelectItem>
                                                        <SelectItem value="odesa">Одеська обл.</SelectItem>
                                                        <SelectItem value="crimea">
                                                            Автономна республіка Крим
                                                        </SelectItem>
                                                        <SelectItem value="sevastopol">Севастополь</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </section>
                            <section className="mb-20 flex w-[1,089px] flex-col gap-4">
                                <h4 className="mb-5 text-4xl font-normal">Категорії</h4>
                                <CardDescription className="text-xl font-normal leading-6">
                                    Оберіть, будь ласка, категорії, до яких відноситься Ваш запит, це допоможе знайти
                                    Вас
                                </CardDescription>
                                <div className="mt-6 flex flex-wrap gap-6">
                                    <Badge className="flex h-20  w-[345px] justify-center border-solid border-[#D4D4D4] bg-[#F5F5F5] text-center text-2xl font-normal leading-7 text-[#000000]">
                                        Волонтерство
                                    </Badge>
                                    <Badge className="flex h-20  w-[345px] justify-center border-solid border-[#D4D4D4] bg-[#F5F5F5] text-center text-2xl font-normal leading-7 text-[#000000]">
                                        Гуманітарна допомога
                                    </Badge>
                                    <Badge className="flex h-20  w-[345px] justify-center border-solid border-[#D4D4D4] bg-[#F5F5F5] text-center text-2xl font-normal leading-7 text-[#000000]">
                                        Перевезення
                                    </Badge>
                                    <Badge className="flex h-20  w-[345px] justify-center border-solid border-[#D4D4D4] bg-[#F5F5F5] text-center text-2xl font-normal leading-7 text-[#000000]">
                                        Прифронтова територія
                                    </Badge>
                                    <Badge className="flex h-20  w-[345px] justify-center border-solid border-[#D4D4D4] bg-[#F5F5F5] text-center text-2xl font-normal leading-7 text-[#000000]">
                                        Військове
                                    </Badge>
                                    <Badge className="flex h-20  w-[345px] justify-center border-solid border-[#D4D4D4] bg-[#F5F5F5] text-center text-2xl font-normal leading-7 text-[#000000]">
                                        Тварини
                                    </Badge>
                                    <Badge className="flex h-20  w-[345px] justify-center border-solid border-[#D4D4D4] bg-[#F5F5F5] text-center text-2xl font-normal leading-7 text-[#000000]">
                                        Люди
                                    </Badge>
                                </div>
                            </section>
                            <section className="mb-20 flex flex-col gap-4">
                                <h4 className="mb-5 text-4xl font-normal leading-[43.2px]">Терміновість</h4>
                                <CardDescription className="text-xl font-normal leading-6">
                                    На скільки терміновий ваш запит про допомогу?
                                </CardDescription>
                                <FormField
                                    control={form.control}
                                    name="urgent"
                                    render={({ field }) => (
                                        <FormItem className="mt-6 flex w-min flex-row items-start space-x-3 space-y-0 rounded-md border">
                                            <FormControl>
                                                <RadioGroup
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    className="flex h-32 w-[476px] flex-col justify-center space-y-1"
                                                >
                                                    <FormItem className="mb-5 flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="urgent" />
                                                        </FormControl>
                                                        <FormLabel className="text-xl font-normal leading-[21.88px]">
                                                            Терміновий
                                                        </FormLabel>
                                                    </FormItem>
                                                    <FormItem className="mb-5 flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="not_urgent" />
                                                        </FormControl>
                                                        <FormLabel className="text-xl font-normal leading-[21.88px]">
                                                            Не дуже терміново
                                                        </FormLabel>
                                                    </FormItem>
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </section>

                            <section className="mb-8 flex  w-[476px] flex-col gap-4">
                                <h4 className="text-4xl font-normal leading-[43.2px]">Контакти для зв’язку</h4>
                                <CardDescription className="text-xl font-normal leading-6">
                                    Введіть будь ласка ваші контактні дані, за якими до вас зможе звернутись людина, що
                                    запропонує допомогу{" "}
                                </CardDescription>
                                <div className="mt-6 flex flex-row gap-6">
                                    <div className="grow">
                                        <CardTitle className="text-sm">Номер телефону</CardTitle>

                                        <FormField
                                            control={form.control}
                                            name="phone_number"
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
                                            name="email"
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

                            <Button type="submit" className="mt-6 h-[90px]" loading={form.formState.isSubmitting}>
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

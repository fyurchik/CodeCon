import { createFileRoute, Link } from "@tanstack/react-router";
import { CardContent, CardTitle, CardDescription } from "@/ui/Card";
import Input from "@/ui/Input";

const Create = () => {
    return (
        <section>
            <div className="mt-4 flex items-center gap-8">
                <Link className="text-sm" to="/applications/search">
                    Повернутись до заявок
                </Link>
            </div>
            <section className="mt-6">
                <CardContent className="pb-0 pl-0">
                    <div className="text-l mt-10 flex h-6 w-24 justify-center border-solid border-black bg-gray-400">
                        Термінова
                    </div>
                    <h1 className="mt-6 text-4xl">Інформація про заявку:</h1>
                    <h1 className="mt-10 text-2xl">Назва заявки у декількох словах</h1>
                    <h4 className="mt-10 text-xl">Детальніше:</h4>
                    <p className="mt-10 text-sm">
                        Більш детально, що потрібно, більш детально, що потрібно, більш детально, що потрібно, більш
                        детально, що потрібно, більш детально, що потрібно, більш детально, що потрібно, більш детально,
                        що потрібно, більш детально, що потрібно, більш детально, що потрібно, більш детально, що
                        потрібно, більш детально, що потрібно, більш детально, що потрібно, більш детально, що потрібно,
                        більш детально, що потрібно, більш детально, що потрібно, більш детально, що потрібно, більш
                        детально, що потрібно, більш детально, що потрібно, більш детально, що потрібно, більш детально,
                        що потрібно, більш детально, що потрібно, більш детально, що потрібно, більш детально, що
                        потрібно, більш детально, що потрібно, більш детально, що потрібно, більш детально, що потрібно,
                        більш детально, що потрібно, більш детально, що потрібно, більш детально, що потрібно, більш
                        детально, що потрібно, більш детально, що потрібно, більш детально, що потрібно, більш детально,
                        що потрібно, більш детально, що потрібно, більш детально, що потрібно
                    </p>
                    <section className="mt-10 flex flex-row gap-6">
                        <div className="grow">
                            <h4 className="text-xl">Вік</h4>
                            <p className="mt-2 text-sm">18 років</p>
                        </div>
                        <div className="grow">
                            <h4 className="text-xl">Область</h4>
                            <p className="mt-2 text-sm">Львівська</p>
                        </div>
                    </section>
                    <section className="flex-column mt-6 gap-6">
                        <h4 className="text-xl">Контакти</h4>
                        <div className="mt-6 flex flex-row gap-6">
                            <div className="grow">
                                <CardTitle className="text-sm">Номер телефону:</CardTitle>
                                <p className="text-sm">+38 000 000 00 00</p>
                            </div>
                            <div className="grow">
                                <CardTitle className="text-sm">Електронна пошта</CardTitle>
                                <p className="text-sm">examplemail@example.com</p>
                            </div>
                        </div>
                    </section>
                    <h1 className="mt-10 text-2xl">Категорії</h1>
                </CardContent>
            </section>
        </section>
    );
};

export const Route = createFileRoute("/applications/")({
    component: Create,
});

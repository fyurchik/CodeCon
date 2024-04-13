import { createFileRoute } from "@tanstack/react-router";
import Button from "../components/ui/Button";
import { Link } from "@tanstack/react-router";

const Page = () => {
    return (
        <section className="ml-[60px] mt-[60px]">
            <p className=" text-xl font-medium leading-4 text-[#A0A0A0]">благодійний застосунок</p>
            <div className="mt-6 flex flex-row items-center justify-between gap-14">
                <h1 className="text-6xl font-medium leading-[60.16px] text-[#181818]">
                    Сервіс, що пов’язує небайдужих людей, та тих, хто постраждав від насильницької війни
                </h1>
                <div className="flex flex-col justify-between gap-14 text-2xl font-normal leading-[22.56px] text-[#181818]">
                    <h3>Допоможи, якщо можеш</h3>
                    <div className="flex flex-row justify-between gap-11">
                        <h3 className="text-[#158F0A]">[або]</h3>
                        <h3>попроси, якщо потребуєш</h3>
                    </div>
                </div>
                <div className="flex flex-col gap-2.5">
                    <Button size="lg" variant="secondary" asChild>
                        <Link to="/auth/login">Увійти</Link>
                    </Button>
                    <Button size="lg" variant="default" asChild>
                        <div>
                            <Link to="/auth/register">Зареєструватись</Link>
                            <img src="../assets/arrowIcon.png" alt="" className="" />
                        </div>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export const Route = createFileRoute("/")({
    component: Page,
});

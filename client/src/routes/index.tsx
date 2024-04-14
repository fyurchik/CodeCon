import { createFileRoute, Link } from "@tanstack/react-router";
import Button from "../components/ui/Button";
import Img from "../assets/1.webp";
import cardsImgs from "../assets/war clues.webp";

const Page = () => {
    return (
        <section className="mx-[60px] mt-[60px]">
            <div>
                <p className=" text-xl font-medium leading-4 text-[#A0A0A0]">благодійний застосунок</p>
                <div className="mt-6 flex flex-row items-center justify-between gap-14">
                    <h1 className="max-w-[20ch] text-6xl font-medium leading-[60.16px] text-[#181818]">
                        Сервіс, що пов’язує небайдужих людей, та тих, хто постраждав від насильницької війни
                    </h1>
                    <div className="flex flex-col justify-between gap-14 text-2xl font-normal leading-[22.56px] text-[#181818]">
                        <h3 className="max-w-[12ch]">Допоможи, якщо можеш</h3>
                        <div className="flex flex-row justify-between gap-11">
                            <h3 className="text-[#158F0A]">[або]</h3>
                            <h3 className="text-right">
                                попроси,
                                <br /> якщо потребуєш
                            </h3>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <Button size="xl" asChild>
                            <Link to="/auth/login">Хочу допомогти</Link>
                        </Button>
                        <Button size="xl" variant="secondary" asChild>
                            <Link to="/auth/register">Потребую допомоги</Link>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="mt-[65px]">
                <img src={Img} alt="Volonteer" className="rounded-3xl" />
            </div>
            <div className="mt-[65px] grid grid-cols-2 gap-[80px]">
                <img src={cardsImgs} alt="Clues of war" />
                <div>
                    <h2 className="text-[64px] font-medium">
                        Людське життя та
                        <br /> свобода — це найвищі цінності!
                    </h2>
                    <p className="mt-[80px] w-[34ch] text-[24px]">
                        Проте, на жаль, через жорстоке повномасштабне вторгення російської армії в Україну безліч її
                        жителів втратили домівки, отримали безліч фізичних та психологічних травм...
                    </p>
                    <p className="mt-[60px] w-[33ch] text-right text-[24px] font-medium text-primary">
                        і ці люди потребують
                        <br /> допомоги!
                    </p>
                    <div className="mt-[80px] flex w-full gap-[20px]">
                        <Button asChild size="xl" className="grow">
                            <Link to="/auth/register">Хочу допомогти</Link>
                        </Button>
                        <Button asChild variant="secondary" size="xl" className="grow">
                            <Link to="/auth/register">Потребую допомоги</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Route = createFileRoute("/")({
    component: Page,
});

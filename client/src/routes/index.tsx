import { createFileRoute, Link } from "@tanstack/react-router";
import Button from "../components/ui/Button";
import Img from "../assets/1.webp";
import cardsImgs from "../assets/war clues.webp";
import handsImg from "../assets/set-raised-hands-isolated-white-removebg 1.webp";
import registerIcon from "../assets/register.svg";
import roleIcon from "../assets/role.svg";
import addIcon from "../assets/add.svg";
import doneIcon from "../assets/done.svg";

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
            <div className="mt-[120px]">
                <img src={Img} alt="Volonteer" className="rounded-3xl" />
            </div>
            <div className="mt-[180px] grid grid-cols-2 gap-[80px]">
                <img src={cardsImgs} alt="Clues of war" />
                <div>
                    <h2 className="text-[64px] font-medium leading-none">
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
            <div className="mt-[80px] flex flex-col items-center">
                <h2 className="w-[24ch] text-center text-[64px] font-medium leading-none">
                    І саме для вирішення цих проблем ми створили наш сервіс ICare
                </h2>
                <div className="flex w-[70ch] items-end">
                    <p className="mt-[60px] w-[33ch] text-[24px] font-medium">
                        де кожен, хто потребує
                        <br /> може попросити про
                        <br /> допомогу,
                    </p>
                    <p className="mt-[60px] w-[33ch] text-right text-[24px] font-medium text-primary">
                        і кожен, хто має
                        <br /> можливість - допомогти
                    </p>
                </div>
                <img src={handsImg} alt="Risen hands" className="mt-[36px]" />
            </div>
            <div className="rounded-3xl bg-card p-[90px]">
                <h2 className="w-[24ch] text-[64px] font-medium leading-none">
                    Як ним користуватись?
                    <br /> Все дуже просто:
                </h2>
                <div className="mt-[80px] flex gap-[30px]">
                    <div className="flex min-w-[310px] flex-col items-center gap-[68px] rounded-3xl bg-[#f5f5f5] px-[40px] py-[60px]">
                        <img src={registerIcon} alt="Register" />
                        <p className="text-center text-[22px]">
                            Зареєструйтесь на сайті ввівши ім’я та електронну пошту
                        </p>
                    </div>
                    <div className="flex min-w-[310px] flex-col items-center gap-[68px] rounded-3xl bg-[#f5f5f5] px-[40px] py-[60px]">
                        <img src={roleIcon} alt="Register" />
                        <p className="text-center text-[22px]">
                            Оберіть свою роль: ви потребує допомоги чи можете її надати
                        </p>
                    </div>
                    <div className="flex min-w-[310px] flex-col items-center gap-[68px] rounded-3xl bg-[#f5f5f5] px-[40px] py-[60px]">
                        <img src={addIcon} alt="Register" />
                        <p className="text-center text-[22px]">
                            Якщо вам потрібна допомога - створіть заявку де ви опишете свою проблему і люди зможуть на
                            неї відкликнутись
                        </p>
                    </div>
                    <div className="flex min-w-[310px] flex-col items-center gap-[68px] rounded-3xl bg-[#f5f5f5] px-[40px] py-[60px]">
                        <img src={doneIcon} alt="Register" />
                        <p className="text-center text-[22px]">
                            Якщо ви хочете допомогти - перегляньте перелік актуальних заявок про допомогу і зверніться
                            по вказаних контактах
                        </p>
                    </div>
                </div>

                <div className="mt-[80px] flex w-full gap-[20px]">
                    <Button asChild size="xl" className="grow">
                        <Link to="/auth/register">Зареєструватись</Link>
                    </Button>
                    <Button asChild variant="secondary" size="xl" className="grow">
                        <Link to="/auth/login">Увійти</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export const Route = createFileRoute("/")({
    component: Page,
});

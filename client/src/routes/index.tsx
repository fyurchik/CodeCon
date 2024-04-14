import { createFileRoute, Link } from "@tanstack/react-router";
import Button from "../components/ui/Button";
import Img from "../assets/1.webp";
import cardsImgs from "../assets/war clues.webp";
import handsImg from "../assets/set-raised-hands-isolated-white-removebg 1.webp";
import registerIcon from "../assets/register.svg";
import roleIcon from "../assets/role.svg";
import addIcon from "../assets/add.svg";
import doneIcon from "../assets/done.svg";
import handsIcon from "../assets/2.svg";
import heartdsIcon from "../assets/1.svg";
import checkIcon from "../assets/3.svg";
import portrait1 from "../assets/young-woman-against-yellowblue-wall-urban-graffiti 1.webp";
import portrait2 from "../assets/young-woman-against-yellowblue-wall-urban-graffiti 2.webp";
import portrait3 from "../assets/young-woman-against-yellowblue-wall-urban-graffiti 2-1.webp";
import quote from "../assets/“.svg";
import news0 from "../assets/11.webp";
import news1 from "../assets/2.webp";
import news2 from "../assets/3.webp";
import news3 from "../assets/4.webp";
import prytula from "../assets/image 28.png";
import azov from "../assets/ddad04_5b2c26f8b5cf404289d7fb7f86d01605_mv2_removebg_preview_1.png";
import pz from "../assets/image 29.png";
import azov2 from "../assets/image 30.png";
import ted from "../assets/image 27.png";
import Logo from "../assets/Logo.svg";

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
            <div className="mt-[180px] grid grid-cols-2 gap-[80px]">
                <div />
                <div>
                    <h2 className="text-[64px] font-medium leading-none">
                        Наш сервіс створено
                        <br /> на основі трьох
                        <br /> фундаментальних
                        <br /> принципів:
                    </h2>
                </div>
                <div className="col-span-full grid grid-cols-[1fr_1px_1fr_1px_1fr] gap-[90px] rounded-3xl bg-card p-[90px]">
                    <div>
                        <img src={heartdsIcon} alt="Heart hands" />
                        <h3 className="mt-[40px] text-[36px] font-medium">Співчуття та розуміння</h3>
                        <p className="mt-[20px] text-[22px]">
                            Передусім, ми виявляємо глибоке розуміння людей, що постраждали від війни в Україні і
                            організовуємо ефективний пошук допомоги, щоб підтримати їх якомога краще.
                        </p>
                    </div>
                    <div className="h-full border-r-[1px] border-[#D4D4D4]" />
                    <div>
                        <img src={handsIcon} alt="Hands" />
                        <h3 className="mt-[40px] text-[36px] font-medium">Відкритість та довіра</h3>
                        <p className="mt-[20px] text-[22px]">
                            Успішна робота нашого сервісу грунтується на відкритості та довірі у взаємодії людей, які
                            просять допомогу, і тих, хто їм допомагає
                        </p>
                    </div>
                    <div className="h-full border-r-[1px] border-[#D4D4D4]" />
                    <div>
                        <img src={checkIcon} alt="Checked" />
                        <h3 className="mt-[40px] text-[36px] font-medium">Доступність</h3>
                        <p className="mt-[20px] text-[22px]">
                            Наш сервіс зручний та доступний кожній людині, у якої є потреба у допомозі або є бажання
                            підтримати інших
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-[180px] grid grid-cols-3 justify-start gap-[45px]">
                <div className="max-w-[458px] self-start justify-self-end  rounded-3xl bg-card p-[30px]">
                    <img className="rounded-2xl" src={portrait1} alt="Portrait" />
                    <h3 className="mt-[26px] text-[36px] font-medium">Анна Гончар</h3>
                    <p className="font-medium text-primary">[ переселенка ]</p>
                    <p className="mt-[26px] text-[18px] leading-tight">
                        Дуже вдячна вам за ваш сервіс, змогла створити заявку на перевезення своїх песиків з
                        тимчасово-окупованих територій, добра людина відгукнулась і допомогла їх вивезти до безпечного
                        місця. Однозначно рекомендую, чудова ініціатива!
                    </p>
                    <img src={quote} alt="Quote" className="ml-auto mt-[26px]" />
                </div>
                <div>
                    <h2 className="text-[64px] font-medium leading-none">
                        Ось що кажуть
                        <br /> про нас люди...
                    </h2>
                    <div className="mt-[135px] max-w-[458px] justify-self-end rounded-3xl bg-card p-[30px]">
                        <img className="rounded-2xl" src={portrait2} alt="Portrait" />
                        <h3 className="mt-[26px] text-[36px] font-medium">Катерина Коваль</h3>
                        <p className="font-medium text-primary">[ волонтерка ]</p>
                        <p className="mt-[26px] text-[18px] leading-tight">
                            Завдяки вашому чудовому сайту змогла налаштувати регулярну відправку гуманітарної допомоги,
                            що надходить від західних партнерів до цивільних людей та військових на тимчасово-окупованих
                            територіях. Дуже вдячна, без вас це було б значно довше та важче!
                        </p>
                        <img src={quote} alt="Quote" className="ml-auto mt-[26px]" />
                    </div>
                </div>
                <div className="max-w-[458px] self-start justify-self-center rounded-3xl bg-card p-[30px]">
                    <img className="rounded-2xl" src={portrait3} alt="Portrait" />
                    <h3 className="mt-[26px] text-[36px] font-medium">Анастасія Ковальчук</h3>
                    <p className="font-medium text-primary">[ переселенка ]</p>
                    <p className="mt-[26px] text-[18px] leading-tight">
                        Чудові люди, що знайшли мої контакти на вашому сервісі допомогли мені та моїй сім’ї фінансово та
                        при побудові тимчасового житла, оскільки наш будинок знищила клята російська ракета. Такі
                        проєкти як ваш дуже важливі у наш час і допомагають українцям триматись разом, залишатись
                        єдиними.
                    </p>
                    <img src={quote} alt="Quote" className="ml-auto mt-[26px]" />
                </div>
            </div>
            <div className="mt-[180px] grid  grid-cols-2">
                <h2 className="text-[64px] font-medium leading-none">
                    Маєш бажання допомогти,
                    <br /> але не маєш часу чи
                    <br /> можливості допомагати
                    <br /> особисто?
                </h2>
                <div className="ml-[162px] max-w-[43ch]">
                    <p className="text-[22px]">
                        Ти можеш підтримати
                        <br /> людей фінансово,
                        <br /> закинувши кошти на збір
                    </p>
                    <div className="mt-[65px] flex justify-between">
                        <p className="font-medium text-primary">[ ось ]</p>
                        <p className="text-right text-[22px] font-medium text-primary">
                            кілька актуальних зборів
                            <br /> від перевірених фондів
                        </p>
                    </div>
                </div>
                <div className="col-span-full mt-[80px] grid grid-cols-2 gap-[30px]">
                    <div className="grid grid-cols-[0.9fr_1.1fr] gap-[30px] rounded-3xl bg-card p-[30px]">
                        <img src={news0} alt="News" />
                        <div className="flex flex-col justify-between">
                            <div>
                                <img src={prytula} alt="Logo" className="mb-[30px] h-[26px]" />
                                <h3 className="text-[32px] font-medium leading-tight">
                                    Проєкт тимчасового модульного житла NEST
                                </h3>
                            </div>
                            <Button size="xl" className="mt-auto w-full">
                                Підтримати
                            </Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-[0.9fr_1.1fr] gap-[30px] rounded-3xl bg-card p-[30px]">
                        <img src={news3} alt="News" />
                        <div className="flex flex-col justify-between">
                            <div>
                                <img src={prytula} alt="Logo" className="mb-[30px] h-[26px]" />
                                <h3 className="text-[32px] font-medium leading-tight">
                                    Обладнання для швидкого кризового реагування
                                </h3>
                            </div>
                            <Button size="xl" className="mt-auto w-full">
                                Підтримати
                            </Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-[0.9fr_1.1fr] gap-[30px] rounded-3xl bg-card p-[30px]">
                        <img src={news1} alt="News" />
                        <div className="flex flex-col justify-between">
                            <div>
                                <img src={ted} alt="Logo" className="mb-[30px] h-[14px]" />
                                <h3 className="text-[32px] font-medium leading-tight">
                                    Грай у Minecraft - відбудовуй у реальному житті
                                </h3>
                            </div>
                            <Button size="xl" className="mt-auto w-full">
                                Підтримати
                            </Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-[0.9fr_1.1fr] gap-[30px] rounded-3xl bg-card p-[30px]">
                        <img src={news2} alt="News" />
                        <div className="flex flex-col justify-between">
                            <div>
                                <img src={ted} alt="Logo" className="mb-[30px] h-[14px]" />
                                <h3 className="text-[32px] font-medium leading-tight">
                                    Це морський бій. Твій донат — твій хід
                                </h3>
                            </div>
                            <Button size="xl" className="mt-auto w-full">
                                Підтримати
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[80px] flex flex-col items-center">
                <h2 className=" text-center text-[64px] font-medium leading-none">
                    Більше актуальних зборів
                    <br /> можна знайти тут:
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
                <div className="mt-[80px] flex -rotate-1 gap-[25px]">
                    <div className="rounded-3xl bg-card p-[80px]">
                        <img src={azov} alt="Azov" />
                    </div>
                    <div className="rounded-3xl bg-card p-[80px]">
                        <img src={pz} alt="Povernys Zhyvym" />
                    </div>
                    <div className="rounded-3xl bg-card p-[80px]">
                        <img src={prytula} alt="Fond Prytuly" />
                    </div>
                    <div className="rounded-3xl bg-card p-[80px]">
                        <img src={ted} alt="United24" />
                    </div>
                    <div className="rounded-3xl bg-card p-[80px]">
                        <img src={azov2} alt="Yanholy Azovu" />
                    </div>
                </div>
            </div>
            <div className="mt-[190px] grid grid-cols-[0.25fr_0.75fr] rounded-3xl bg-card p-[90px]">
                <div className="flex flex-col justify-between gap-[160px]">
                    <div>
                        <img src={Logo} alt="Logo" />
                        <h2 className="mt-[60px] text-[32px] font-medium">Контакти</h2>
                        <p className="mt-[40px] text-[22px] font-medium">Тех.підтримка:</p>
                        <p className="mt-[30px] text-[22px] text-primary">+38 (000) 000 00 00</p>
                        <p className="mt-[15px] text-[22px] text-primary">Тexample@gmail.com</p>
                    </div>
                    <div>
                        <Link to="/" className="text-[22px]">
                            Політика конфіденційності
                        </Link>
                        <p className="mt-[40px] text-[22px] text-[#C4C4C4]">
                            Developed by CoDeity
                            <br /> developming team for
                            <br /> Hackathon 2024.
                        </p>
                    </div>
                </div>
                <div className="rounded-3xl bg-[#158F0A] p-[80px] text-white">
                    <h2 className="text-center text-[64px] font-medium leading-none">
                        Є пропозиції
                        <br /> з покращення сервісу?
                    </h2>
                    <div className="mx-auto  mt-[60px] max-w-[43ch]">
                        <p className="text-[22px]">
                            Напиши нам на пошту свої
                            <br /> пропозиції як ми можемо
                            <br /> удосконалити наш сервіс
                        </p>
                        <div className="mt-[65px] flex justify-between">
                            <p className="font-medium">[ ось ]</p>
                            <p className="text-right text-[22px] font-medium">
                                зробити його більш
                                <br /> зручним та допомогти
                                <br /> більшій кількості
                                <br /> людей
                            </p>
                        </div>
                    </div>
                    <Button variant="secondary" size="xl" className="mx-auto mt-[80px] block w-[580px]">
                        Написати на пошту
                    </Button>
                </div>
            </div>
        </section>
    );
};

export const Route = createFileRoute("/")({
    component: Page,
});

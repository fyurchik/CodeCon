import { AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import Badge from "./Badge";
import Button from "./Button";
import { Card, CardHeader, CardContent, CardTitle } from "@/ui/Card";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/ui/Modal";

const ApplicationCard = () => {
    return (
        <Card>
            <CardHeader>
                <Badge variant="destructive">Терміново</Badge>
                <CardTitle className="line-clamp-2">
                    Заголовок заявки максимум дві строки Заголовок заявки максимум дві строкиЗаголовок заявки максимум
                    дві строкиЗаголовок заявки максимум дві строкиЗаголовок заявки максимум дві строкиЗаголовок заявки
                    максимум дві строки
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="line-clamp-2">
                    Коротки опис заявки який теж іду у два ряки Коротки опис заявки який теж іду у два ряки Коротки опис
                    заявки який теж іду у два ряки Коротки опис заявки який теж іду у два ряки Коротки опис заявки який
                    теж іду у два ряки Коротки опис заявки який теж іду у два ряки Коротки опис заявки який теж іду у
                    два ряки
                </p>
                <div className="my-8 grid grid-cols-4 gap-4">
                    <div className="flex flex-col gap-2">
                        <p>Вік: 19</p>
                        <p>Місто: Львів</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>Tag#1</p>
                        <p>Tag#2</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>Tag#3</p>
                        <p>Tag#4</p>
                    </div>
                    <p>Статус заявки: актуальна</p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                    <Button>Редагувати заявку</Button>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="destructive">Видалити заявку</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Ви дійсно хочете видалити заявку?</AlertDialogTitle>
                                <AlertDialogDescription>Ця дія незворотня</AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Скасувати</AlertDialogCancel>
                                <Button type="button" variant="destructive">
                                    Видалити
                                </Button>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </CardContent>
        </Card>
    );
};
export default ApplicationCard;

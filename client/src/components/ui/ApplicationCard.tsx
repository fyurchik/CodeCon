import { AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import { Link } from "@tanstack/react-router";
import { useContext } from "react";
import Badge from "./Badge";
import Button from "./Button";
import { UserContext } from "@/context/User";
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

interface Props {
    application: {
        active: boolean;
        age: number;
        city: string;
        content: string;
        email: string;
        id: number;
        phone_number: string;
        tags: number[];
        title: string;
        urgent: boolean;
        user: number;
    };
}

const ApplicationCard = ({ application: { tags, title, active, age, city, content, urgent, user: userId } }: Props) => {
    const { user } = useContext(UserContext);
    return (
        <Card>
            <CardHeader>
                {urgent && <Badge variant="destructive">Терміново</Badge>}
                <CardTitle className="line-clamp-2">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="line-clamp-2">{content}</p>
                <div className="my-8 grid grid-cols-4 gap-4">
                    <div className="flex flex-col gap-2">
                        <p>Вік: {age}</p>
                        <p>Місто: {city}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        {tags.map((tag) => (
                            <p key={tag}>{tag}</p>
                        ))}
                    </div>
                    <p>Статус заявки: {active ? "акутальна" : "неактуальна"}</p>
                </div>
                {user && user.id === userId ? (
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
                ) : (
                    <div className="mt-6 flex items-center gap-4">
                        <Button asChild>
                            <Link to="/applications">Переглянути заявку</Link>
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};
export default ApplicationCard;

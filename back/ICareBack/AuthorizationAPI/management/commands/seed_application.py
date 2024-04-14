
from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from AuthorizationAPI.models import Application, Tag
import random

class Command(BaseCommand):
    help = 'Seeds Application and Tag data from different users.'

    def handle(self, *args, **kwargs):
        # Очистити всі дані з моделей Application, Tag та User
        Application.objects.all().delete()
        Tag.objects.all().delete() # Видалити всіх користувачів, окрім суперкористувача

        # Створити різноманітних користувачів з різними параметрами
        user_data = [
            {'username': 'user1', 'email': 'user1@example.com', 'password': 'password1', 'first_name': 'User', 'last_name': 'One'},
            {'username': 'user2', 'email': 'user2@example.com', 'password': 'password2', 'first_name': 'User', 'last_name': 'Two'},
            {'username': 'user3', 'email': 'user3@example.com', 'password': 'password3', 'first_name': 'User', 'last_name': 'Three'},
            {'username': 'user4', 'email': 'user4@example.com', 'password': 'password4', 'first_name': 'User', 'last_name': 'Four'}
        ]

        users = []
        for user_info in user_data:
            user = User.objects.create_user(**user_info)
            users.append(user)

        # Створити різноманітні теги
        tag_names = ['Tag1', 'Tag2', 'Tag3', 'Tag4', 'Tag5']
        tags = []
        for tag_name in tag_names:
            tag = Tag.objects.create(name=tag_name)
            tags.append(tag)

        # Створити різноманітні заявки для кожного користувача
        titles = ['Application A', 'Application B', 'Application C', 'Application D', 'Application E']
        contents = ['Content A', 'Content B', 'Content C', 'Content D', 'Content E']
        ages = [20, 25, 30, 35, 40]
        actives = [True, True, False, False, True]
        urgents = [False, True, False, True, False]

        for user in users:
            for i in range(5):
                # Створіть нову заявку
                application = Application.objects.create(
                    user=user,
                    title=titles[i],
                    content=contents[i],
                    age=ages[i],
                    active=actives[i],
                    urgent=urgents[i]
                )

                # Випадково додайте теги до заявки
                application.tags.add(*random.sample(tags, k=random.randint(1, len(tags))))

        # Повідомте користувача про успішне засівання
        self.stdout.write(self.style.SUCCESS('Дані успішно засіяно!'))
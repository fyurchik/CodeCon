# Generated by Django 4.2.11 on 2024-04-13 14:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('AuthorizationAPI', '0007_remove_customuser_user'),
    ]

    operations = [
        migrations.DeleteModel(
            name='CustomUser',
        ),
    ]
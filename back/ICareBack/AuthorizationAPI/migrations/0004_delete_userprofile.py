# Generated by Django 4.2.11 on 2024-04-13 13:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('AuthorizationAPI', '0003_remove_userprofile_firstname_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='UserProfile',
        ),
    ]
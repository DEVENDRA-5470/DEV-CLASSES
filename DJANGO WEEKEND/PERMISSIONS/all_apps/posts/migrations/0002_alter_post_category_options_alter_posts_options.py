# Generated by Django 4.2.16 on 2024-10-26 07:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='post_category',
            options={'verbose_name_plural': 'Post Category'},
        ),
        migrations.AlterModelOptions(
            name='posts',
            options={'verbose_name_plural': 'Post'},
        ),
    ]
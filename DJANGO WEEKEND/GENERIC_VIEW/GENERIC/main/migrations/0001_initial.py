# Generated by Django 5.1.1 on 2024-09-29 06:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('emp_name', models.CharField(max_length=20)),
                ('emp_mob', models.CharField(max_length=20)),
                ('emp_email', models.CharField(max_length=20)),
                ('emp_age', models.CharField(max_length=20)),
            ],
        ),
    ]

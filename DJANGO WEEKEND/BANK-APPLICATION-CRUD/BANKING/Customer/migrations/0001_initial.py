# Generated by Django 5.0.6 on 2024-08-24 10:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CustomerData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cus_acc_no', models.CharField(max_length=20, null=True, unique=True)),
                ('cus_name', models.CharField(max_length=20, null=True)),
                ('cus_image', models.ImageField(null=True, upload_to='uploads/')),
                ('cus_mobile', models.CharField(max_length=20, null=True)),
                ('cus_balance', models.BigIntegerField(max_length=20, null=True)),
                ('cus_created_at', models.DateTimeField(auto_now_add=True)),
                ('cus_updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]

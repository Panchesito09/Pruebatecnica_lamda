# Generated by Django 5.0.7 on 2024-08-06 02:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_alter_userprofile_cc_alter_userprofile_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='cc',
            field=models.CharField(max_length=20, unique=True),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='name',
            field=models.CharField(max_length=100),
        ),
    ]

# Generated by Django 3.2.13 on 2023-04-03 06:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('youtube', '0013_alter_youtube_author'),
    ]

    operations = [
        migrations.CreateModel(
            name='WordTokenizing',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=255, null=True)),
                ('value', models.IntegerField()),
                ('subject', models.CharField(blank=True, max_length=255, null=True)),
            ],
        ),
    ]
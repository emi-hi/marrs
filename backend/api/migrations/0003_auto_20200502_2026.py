# Generated by Django 3.0.5 on 2020-05-03 03:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20200425_2056'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='image',
            field=models.ImageField(upload_to='gallery', verbose_name='Image'),
        ),
        migrations.AlterField(
            model_name='image',
            name='product',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='images', to='api.Product'),
        ),
    ]

# Generated by Django 3.0.5 on 2020-05-24 06:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_product_featured_item'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='status',
            new_name='sale_status',
        ),
    ]
from django.db import models


class ProductType(models.Model):
    name = models.CharField(max_length=30, null=False, blank=False)

class Product(models.Model):
    title = models.CharField(max_length=250, blank=False)
    price= models.DecimalField(max_digits=10, decimal_places=2, blank=True)
    product_type = models.ForeignKey(ProductType, to_field="id", null=True, on_delete=models.SET_NULL)
    description = models.TextField(blank=True)

class Image(models.Model):
    file_path = models.CharField(max_length=200, blank=False, null=False)
    product = models.ForeignKey(Product, to_field="id", on_delete=models.CASCADE)



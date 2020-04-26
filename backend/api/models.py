from django.db import models


class ProductType(models.Model):
    name = models.CharField(max_length=30, null=False, blank=False)

class Product(models.Model):
    title = models.CharField(max_length=250, blank=False)
    price= models.DecimalField(max_digits=10, decimal_places=2, blank=True)
    product_type = models.ForeignKey(ProductType, to_field="id", null=True, on_delete=models.SET_NULL)
    description = models.TextField(blank=True)


def get_image_filename(instance, filename):
    id = instance.product.id
    return "product_images/%s" % (id)  

class Image(models.Model):
    product = models.ForeignKey(Product, default=None, on_delete=models.CASCADE)
    image = models.ImageField(upload_to=get_image_filename,
                              verbose_name='Image')
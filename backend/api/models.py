from django.db import models
import django.utils 

class ProductType(models.Model):
    name = models.CharField(max_length=30, null=False, blank=False)
    def __str__(self):
      """A string representation of the model."""
      return self.name

class SaleStatus(models.Model):
    comment = models.CharField(max_length=100)
    def __str__(self):
      """A string representation of the model."""
      return self.comment

class Product(models.Model):
    title = models.CharField(max_length=250, blank=False)
    price= models.DecimalField(max_digits=10, decimal_places=2, blank=True)
    product_type = models.ForeignKey(ProductType, to_field="id", null=True, on_delete=models.SET_NULL)
    description = models.TextField(blank=True)
    date_modified = models.DateField(default=django.utils.timezone.now)
    sale_status = models.ForeignKey(SaleStatus, to_field="id", null=True, on_delete=models.SET_NULL, default=1)
    featured_item = models.BooleanField(default=False)

    def __str__(self):
        """A string representation of the model."""
        return self.title


def get_image_filename(instance, filename):
    id = instance.product.id
    return "product_images/%s" % (id)  

class Image(models.Model):
    product = models.ForeignKey(Product, related_name='images', default=None, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="gallery",
                              verbose_name='Image')
    def __str__(self):
      """A string representation of the model."""
      return self.product.title
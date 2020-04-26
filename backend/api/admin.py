from django.contrib import admin

# Register your models here.
from .models import Product, ProductType, Image

admin.site.register(Product)
admin.site.register(ProductType)
admin.site.register(Image)


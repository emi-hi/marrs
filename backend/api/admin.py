from django.contrib import admin

# Register your models here.
from .models import Product, ProductType, Image, SaleStatus

admin.site.register(Product)
admin.site.register(ProductType)
admin.site.register(Image)
admin.site.register(SaleStatus)


# todos/serializers.py
from rest_framework import serializers
from .models import Product, ProductType, Image, SaleStatus

class ImageSerializer(serializers.ModelSerializer):
  class Meta:
    model = Image
    fields = "__all__"

class ProductTypeSerializer(serializers.ModelSerializer):
  class Meta:
    model = ProductType
    fields = "__all__"

class SaleStatusSerializer(serializers.ModelSerializer):
  class Meta:
      model = SaleStatus
      fields = ("comment",)


class ProductSerializer(serializers.ModelSerializer):
  images = ImageSerializer(many=True)
  product_type = ProductTypeSerializer()
  sale_status = SaleStatusSerializer()
  class Meta:
      fields = [
          'id',
          'title',
          'price',
          'product_type',
          'description',
          'images',
          'date_modified',
          'sale_status'
      ]
      model = Product
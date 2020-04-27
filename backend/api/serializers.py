# todos/serializers.py
from rest_framework import serializers
from .models import Product, ProductType, Image

class ImageSerializer(serializers.ModelSerializer):
  class Meta:
    model = Image
    fields = "__all__"

class ProductTypeSerializer(serializers.ModelSerializer):
  class Meta:
    model = ProductType
    fields = "__all__"

class ProductSerializer(serializers.ModelSerializer):
  images = ImageSerializer(many=True)
  product_type = ProductTypeSerializer()
  class Meta:
      fields = [
          'id',
          'title',
          'price',
          'product_type',
          'description',
          'images'
      ]
      model = Product
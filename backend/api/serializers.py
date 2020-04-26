# todos/serializers.py
from rest_framework import serializers
from .models import Product, ProductType, Image


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'price',
            'product_type',
            'description',
        )
        model = Product
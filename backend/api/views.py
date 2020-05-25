from rest_framework import generics
from rest_framework import filters


from .models import Product
from .serializers import ProductSerializer


class ListProduct(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    filter_backends = [filters.SearchFilter]
    search_fields = ['title', 'description']

class ListFeaturedProduct(generics.ListCreateAPIView):
    queryset = Product.objects.filter(featured_item = True)
    serializer_class = ProductSerializer


     
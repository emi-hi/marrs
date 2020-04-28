# todo_api/urls.py
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from api import views


urlpatterns = [
  path('product', views.ListProduct.as_view(), name='product')
]
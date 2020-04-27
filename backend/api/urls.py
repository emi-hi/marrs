# todo_api/urls.py
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from . import views


router = routers.SimpleRouter(trailing_slash=False)
router.register(r'product', views.ListProduct.as_view()),
# router.register(r'admin/', admin.site.urls)

urlpatterns = router.urls

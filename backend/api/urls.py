# todo_api/urls.py
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers


router = routers.SimpleRouter(trailing_slash=False)
router.register(r'api/', OrganizationViewSet)
router.register(r'admin/', admin.site.urls)

urlpatterns = router.urls

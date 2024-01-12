from django.urls import path
from .views import ImageUploadView

urlpatterns = [
    path('api/upload_image/', ImageUploadView.as_view(), name='image-upload')
]
from django.urls import path
from .views import ProdukDisplayView

urlpatterns = [
    path('api/produk-display/', ProdukDisplayView.as_view(), name='produk-display')
]
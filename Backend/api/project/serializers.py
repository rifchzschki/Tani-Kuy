from rest_framework import serializers
from .models import Produk

class ProdukSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produk
        fields = ('id', 'nama_produk', 'kategori', 'gambar_produk', 'rating_produk', 'harga_produk')

    def get_gambar_produk(self, obj):
        return self.context['request'].build_absolute_uri(obj.gambar_produk.url)
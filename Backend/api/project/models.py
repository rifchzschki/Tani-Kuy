from django.db import models


class Produk(models.Model):
    nama_produk = models.CharField(max_length=255)
    kategori = models.CharField(max_length=100)
    gambar_produk = models.ImageField(upload_to='produk/', null=True, blank=True)
    rating_produk = models.DecimalField(max_digits=3, decimal_places=2)
    harga_produk = models.DecimalField(max_digits=10, decimal_places=3)

    def __str__(self):
        return self.nama_produk

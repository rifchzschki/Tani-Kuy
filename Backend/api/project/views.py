from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ProdukSerializer
from .models import Produk


class ProdukDisplayView(APIView):

    def post(self, request):
        serializer = ProdukSerializer(data=request.data)
        if serializer.is_valid(): 
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    
    def get(self, request):
        Products = Produk.objects.all()
        serializer = ProdukSerializer(Products, many=True, context={'request': request})
        return Response(serializer.data)
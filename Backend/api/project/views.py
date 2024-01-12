from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from .serializers import ImageSerializer
from .models import Image

# Create your views here.
class ImageUploadView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request):
        serializer = ImageSerializer(data=request.data)
        Images = Image.objects.all()
        if Images.exists():
            Images[0].delete()
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    
    def get(self, request):
        Images = Image.objects.all()
        serializer = ImageSerializer(Images, many=True)
        return Response(serializer.data)
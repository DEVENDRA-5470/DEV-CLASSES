from rest_framework import generics
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from jwt_app.models import Note
from .serializer import NoteSerilizer

class Show_notes(generics.ListAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerilizer
    permission_classes = [IsAuthenticated]


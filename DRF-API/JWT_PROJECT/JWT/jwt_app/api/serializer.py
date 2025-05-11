from rest_framework import serializers
from jwt_app.models import Note
class NoteSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'
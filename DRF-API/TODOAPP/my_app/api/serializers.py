from rest_framework import serializers
from my_app.models import My_todo

class My_tode_ser(serializers.ModelSerializer):
    class Meta:
        model=My_todo
        fields="__all__"

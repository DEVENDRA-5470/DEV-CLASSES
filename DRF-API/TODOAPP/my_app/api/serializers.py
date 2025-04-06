from rest_framework import serializers
from my_app.models import My_todo

class My_tode_ser(serializers.ModelSerializer):
    class Meta:
        model=My_todo
        # fields="__all__"
        fields = ['task_title', 'task_desc']

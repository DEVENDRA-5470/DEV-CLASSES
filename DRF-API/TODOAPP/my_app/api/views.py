from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from my_app.api.serializers import My_tode_ser
from my_app.models import My_todo


@api_view(["GET"])
def all_task(request):
    data=My_todo.objects.all()
    ser=My_tode_ser(data,many=True)
    return Response(ser.data)


@api_view(["GET"])
def task(request,pk):
    try:
        data=My_todo.objects.get(pk=pk)

    except My_todo.DoesNotExist:
        return Response({"error":"Data is not found"},status=404)
    
    ser=My_tode_ser(data)
    return Response(ser.data)
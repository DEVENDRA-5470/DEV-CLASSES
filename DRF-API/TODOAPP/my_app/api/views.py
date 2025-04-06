from django.http import HttpResponse
from django.shortcuts import redirect, render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import  generics, permissions
from my_app.api.serializers import My_tode_ser
from my_app.models import My_todo
from rest_framework.authentication import TokenAuthentication
from django.contrib.auth.decorators import login_required
from rest_framework.authtoken.models import Token



# @api_view(["GET"])
# def all_task(request):
#     data=My_todo.objects.all()
#     ser=My_tode_ser(data,many=True)
#     return Response(ser.data)

# @api_view(["GET"])
# def task(request,pk):
#     try:
#         data=My_todo.objects.get(pk=pk)

#     except My_todo.DoesNotExist:
#         return Response({"error":"Data is not found"},status=404)
    
#     ser=My_tode_ser(data)
#     return Response(ser.data)

# @api_view(["DELETE"])
# def delete_task(request,pk):
#     try:
#         data=My_todo.objects.get(pk=pk)
#         data.delete()
#         return Response({"Ok":"Data is Deleted"},status=200)

#     except My_todo.DoesNotExist:
#         return Response({"error":"Data is not found"},status=404)


# @api_view(['PATCH'])
# def partial_update(request,pk):
#     try:
#         my_data=My_todo.objects.get(pk=pk)
#     except My_todo.DoesNotExist:
#         return Response({"error":"Data is not found"},status=404)
    
#     ser=My_tode_ser(my_data,data=request.data ,partial=True)
#     if ser.is_valid():
#         ser.save()
#         return Response(ser.data ,status=200)
#     return Response(ser.errors ,status=400)

# @api_view(['PUT'])
# def full_update(request,pk):
#     try:
#         my_data=My_todo.objects.get(pk=pk)
#     except My_todo.DoesNotExist:
#         return Response({"error":"Data is not found"},status=404)
    
#     ser=My_tode_ser(my_data,data=request.data)
#     if ser.is_valid():
#         ser.save()
#         return Response(ser.data ,status=200)
#     return Response(ser.errors ,status=400)


# @api_view(['POST'])
# def create_data(request):
#     ser=My_tode_ser(data=request.data , partial=True)
#     if ser.is_valid():
#         ser.save()
#         return Response(ser.data ,status=200)
#     return Response(ser.errors ,status=400)



# CLASS BASED RESOURCES

class All_task(generics.ListAPIView):
    queryset = My_todo.objects.all()
    serializer_class = My_tode_ser
    

class get_task(generics.RetrieveAPIView):
    queryset = My_todo.objects.all()
    serializer_class = My_tode_ser
    lookup_field="pk"

class delete_task(generics.DestroyAPIView):
    queryset = My_todo.objects.all()
    serializer_class = My_tode_ser
    lookup_field="pk"
 

class create_task(generics.CreateAPIView):
    queryset = My_todo.objects.all()
    serializer_class = My_tode_ser
    permission_classes=[permissions.IsAuthenticated]
    authentication_classes=[TokenAuthentication]

    def perform_create(self, serializer):
        serializer.save(task_created_by=self.request.user)
 
class update_task(generics.UpdateAPIView):
    queryset = My_todo.objects.all()
    serializer_class = My_tode_ser
    lookup_field="pk"

class all_action(generics.RetrieveUpdateDestroyAPIView):
    queryset = My_todo.objects.all()
    serializer_class = My_tode_ser
    lookup_field="pk"


@login_required
def manual_create_task(request):
    if request.method=="POST":
        user=request.user
        title=request.POST.get("task_title")
        desc=request.POST.get("task_desc")

        My_todo.objects.create(task_title=title,task_desc=desc,task_created_by=user)
        return redirect("/all-task/")

    else:
        token,created=Token.objects.get_or_create(user=request.user)
        return render(request,'manual_task.html',{'token':token.key})
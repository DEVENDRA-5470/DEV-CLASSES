from BANK.api.serializers import Accounts_ser
from BANK.models import Accounts
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

@api_view(['GET'])
def all_accounts(request, id=None):
        try:
            if id is not None:
                account=get_object_or_404(Accounts,id=id)
                serializer=Accounts_ser(account)
                
            else:
                account=Accounts.objects.all()
                serializer=Accounts_ser(account,many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)
        
        except Exception as e:
            return Response({'error':str(e)},status)
        
@api_view(['PATCH'])
def update_account(request,cus_ac_no):
    account=get_object_or_404(Accounts,cus_ac_no=cus_ac_no)
    serializer=Accounts_ser(account,request.data,partial=True)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_200_OK)
    else:
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['POST'])
def create_account(request):
    serializer=Accounts_ser(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'Status':"Account Created"},status=status.HTTP_201_CREATED)
    
    return Response({'Status':"Account now Created"},status=status.HTTP_400_BAD_REQUEST)
    
     
@api_view(['DELETE'])
def delete_account(request,id):
    account=get_object_or_404(Accounts,id=id)
    account.delete()
    return Response({'Status':"Account Deleted"},status=status.HTTP_200_OK)
    

    
from BANK.api.serializers import Accounts_ser
from BANK.models import Accounts
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response

@api_view(['GET'])
def all_accounts(request):
    try:
        account=Accounts.objects.all()
        serializer=Accounts_ser(account ,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'error':str(e)},status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
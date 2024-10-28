from rest_framework import serializers
from BANK.models import Accounts
class Accounts_ser(serializers.ModelSerializer):
    class Meta:
        model=Accounts
        fields='__all__'
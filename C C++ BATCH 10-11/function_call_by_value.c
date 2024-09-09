#include<stdio.h>

int swap(int var1,int var2){
    int temp=var1;
    var1=var2;
    var2=temp;
}

int main(){
    int var1=30 , var2=20;
    printf("Before swap var1 and var2 :%d ,%d\n",var1,var2);

    swap(var1 ,var2);
    printf("After Swap var1 and var2 :%d ,%d\n",var1,var2);

    return 0;
}

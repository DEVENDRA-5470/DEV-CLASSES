#include<stdio.h>

int swap(int *var1 , int *var2){
    int temp=*var1;
    *var1=*var2;
    *var2=temp;
}

int main(){
    int var1=20 ,var2=30;
    printf("Before swapping var1 and var2 : %d,%d\n",var1,var2);

    swap(&var1,&var2);
    printf("After swap var1 and var2 :%d ,%d\n",var1,var2);

    return 0;
}

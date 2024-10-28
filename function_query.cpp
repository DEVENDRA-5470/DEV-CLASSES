/*#include <iostream>
using namespace std;

int addition (int a, int b)
{
  int r;
  r=a+b;
  return r;
  //cout << "The result is " << r;
}

int main ()
{
  int d;
  d=addition (5,3);
  cout <<"The result is "<< d;

}*/


// call by value.
/*#include <stdio.h>
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
}*/

#include<stdio.h>

int swap(int *var1 , int *var2){
    int temp=*var1;
    *var1=*var2;
    *var2=temp;
    return *var2 , *var1
}

int main(){
    int var1=20 ,var2=30;
    printf("Before swapping var1 and var2 : %d,%d\n",var1,var2);

    int x;
    x=swap(&var1,&var2);
    printf("After swap var1 and var2 :%d ,%d\n",);

    return 0;
}

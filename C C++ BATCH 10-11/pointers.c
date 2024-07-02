#include<stdio.h>
// A pointer is a variable that stores the memory address of another
// variable .Rather than holding the data value.
// A pointer holds the address where the data stored.

int main(){

    int x=10;

    int *ptr; // Declaration of pointer.

    ptr=&x;

    printf("Value of x : %d\n",*ptr);

    *ptr=20;

    printf("New Value of x :%d",x);
}

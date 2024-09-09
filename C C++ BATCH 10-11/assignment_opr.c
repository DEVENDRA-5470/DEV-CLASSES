#include<stdio.h>

int main(){
    int a = 10;
    printf("Bfore Value of a %d\n",a);
    // a=a+10; // standard method
    // a=a+5;
    // a=a+2;

    a+=10; // shorthand method
    a+=5;
    a+=2;
    a*=3;
    printf("After Value of a %d\n",a);

}
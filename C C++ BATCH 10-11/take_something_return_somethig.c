#include<stdio.h>


// take_something_return_nothing
int sum(int a , int b){
    int res =a+b;
    return res;
}


int main(){
    int num1=10 ,num2=30;

    int total=sum(num1,num2); //arguments

    if (total%2==0){
        printf("This is Even Number ");
    }
    else{
        printf("This is odd number");
    }

    return 0;
}

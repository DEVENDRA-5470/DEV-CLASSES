#include<stdio.h>

// logical operator (and (&&) or (||) not (!))

// && => it gives ture only if all condition true otherwise false
// || => it gives true if any one condition true otherwise false
// ! => it gives opposite result.
 
// and (&&)
void and_opr(){
    int a = 5, b = 10;
    if(a > 2 && b > 5 && a==5){
        printf("Both conditions are true\n");
    }
    else{
        printf("Not True");
    }
}

// or_opr(||)
void or_opr(){
    int a = 5, b = 10;
    if (!(a > 12 || b > 15 || a==5)){
        printf("Both conditions are true\n");
    }
    else{
        printf("Not True");
    }
}

// not_opr(!)
void not_opr(){
    int a = 5, b = 10;
    if(a > 12 || b > 15 || a==5){
        printf("Both conditions are true\n");
    }
    else{
        printf("Not True");
    }
}

int main(){
    // and_opr();
    // or_opr();
    not_opr();
    return 0;
}

// Assignment
// 1. Write a program to check whether a number is even or odd.
// 2. Write a program to check whether a number is divisible by 3 and 5.
// 3. Write a program to check greatest number among three numbers.

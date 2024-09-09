#include<stdio.h>


// 1.Arithmatic opr(+,-,/,%,*)

void arth_opr(){
    int a,b,c;
    a=10;
    b=30;
    // c=b/a;  // Quoteint
    c=b%a; // Remainder
    printf("Result of  %d and %d  :%d" ,a,b,c);

    // comparision operator.
    // if (c>50){
    // printf("I am fine  ");
    // }

}

// 2. Comparision operator(>,<,>=,<=, !=, == )

void check_marks(){
    int stu_age=15;
    int elig_age=18;

    if (stu_age==elig_age){
        printf("You are eligible for voting");
    }
    else{
        printf("You are not eligible for voting");
    }

}

// Multiple if  and else if

void check_multipleif(){
    int num;
    printf("Enter your number : ");
    scanf("%d",&num);

    if (num > 80){
        printf("Grade A\n");
    }

    if (num > 60){
        printf("Grade B\n");
    }

    if (num > 500){
        printf("Grade C\n");
    }

    if (num > 40){
        printf("Grade d\n");
    }

    else{
        printf("Fail\n");
    }
}


void check_multiple_elseif(){
    int num=90;

    if (num > 80){
        printf("Grade A\n");
    }

    else if (num > 60){
        printf("Grade B\n");
    }

    else if (num > 500){
        printf("Grade C\n");
    }

    else if (num > 40){
        printf("Grade d\n");
    }

    else{
        printf("Fail\n");
    }
}





int main(){
    // arth_opr();
    // check_marks();
    check_multipleif();
    return 0;
}
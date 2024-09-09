#include<stdio.h>

void ternary_opr(){
    char grade;
    int stu_marks=80;
    grade = (stu_marks > 70) ? printf("You are Pass"): printf("You are Fail");
    printf("%c",grade);
}

int main(){
    ternary_opr();
    return 0;
}
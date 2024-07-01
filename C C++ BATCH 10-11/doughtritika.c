#include<stdio.h>
void opr_greatest_num(){
 int num1;
 int num2;
 int num3;
 int num4;
 int num5;

 printf("Enter your 5 numbers : ");
 scanf("%d %d %d %d %d %d", &num1, &num2, &num3, &num4, &num5);

 if ((num1>num2 && num1>num3) || (num1>num4 && num1>num5)){
 printf("NUMBER 1 is the greatest number among the five numbers");
 }
 else if (num2>num1 && num2>num3 && num2>num4 && num2>num5){
 printf("NUMBER 2 is the greatest number among the five numbers");
 }
 else if (num3>num1 && num3>num2 && num3>num4 && num3>num5){
 printf("NUMBER 3 is the greatest number among the five numbers");
 }
 else if (num4>num1 && num4>num2 && num4>num3 && num4>num5){
 printf("NUMBER 4 is the greatest number among the five numbers");
 }
 else {
    printf("NUMBER 5 is the greatest number among the five numbers");
 }
 }

int main(){
    //check_marks();
    //check_stu_marks();
    //check_chances();
    opr_greatest_num();
    return 0;
}

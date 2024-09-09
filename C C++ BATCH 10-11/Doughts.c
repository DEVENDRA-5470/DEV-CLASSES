#include<stdio.h>

//  2.Write a program to sum of generated number;

int sum_one(){
    printf("Enter a number: ");
    int user_num ;
    printf("Enter a number: ");
    scanf("%d",&user_num);
    for (int i=0; i<user_num ;i++){
        printf("%d",i);
    }

}


int main(){
    int sum_one();
    return 0;
}


#include<stdio.h>
// for loop
// while loop
// do while loop

int one_to_ten(){
    for(int i=1; i<=10; i++ ){
        printf("%d\n",i);
    }
}

int ten_to_one(){
    for(int i=10; i>0 ; i--){
        printf("%d\n",i);
    }
}

int skip_one(){
    for(int i=1; i<=20 ; i+=2){
        printf("%d ",i);
    }
}

int multiply(){
    int mul=1;
    for(int i=1;i<=5;i++){
        // mul*=i;
        mul=mul*i;
         // printf("Ritika \n");
        printf("Result %d :\n",mul);
        
    }


}

int main(){
    // one_to_ten();
    // ten_to_one();
    // skip_one();
    multiply();
    return 0;
}

// 1.Write a program to find odd and even number;
// 2.Write a program to sum of generated number;
// 3.Write a program print number by taken input from user.;
// 4.Write a program to print only odd number for 1 to 15 ;
// 5.Write a program to print only even number for 1 to 15 ;




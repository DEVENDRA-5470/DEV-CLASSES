#include<stdio.h>

int nested_ifelse(){
    int a=10;
    if (a>5){
        printf("i can execute \n");

        if (a<18){
            printf("i can execute too \n");

            if (a<10){
                printf("i can execute also \n");
            }
            else{
                printf("i am not able to execute \n");
            }
        }
        else{
            printf("i can not execute too  \n");
        }
    }
    else{
        printf("I can not execute \n");
    }
}

// Task upsc : pri>mains>interview

int upsc_exam(){
    int pre;
    printf("Enter your pre marks : ");
    scanf("%d",&pre);
    if (pre>=300){
        printf("Tum pre mein pass ho..!\n");

        int mains;
        printf("Enter your mains marks : ");
        if (mains>=500){
            printf("Tum mains mein pass ho..!\n");

            int interw;
            printf("Enter your interview marks : ");
            if(interw>=600){
                printf("Tum ias bangye..!\n");
            }
            else{
                printf("Good try visit next for upsc\n");
            }
        }
        else{
            printf("Tum mains mein fail ho..!\n");
        }

    }
    else{
        printf("Tum pre mein fail ho..!\n")
    }
}




int main(){
    // nested_ifelse();
    upsc_exam();
    return 0;
}

// Operators:
// Arithmetic Operators:
// Logical opr:
// Comparision:
// Assignment Opr:
// condtional opr :(ternary opr)

// if else
// if elif
// nested if else

// loop : for loop , while loop , do while loop


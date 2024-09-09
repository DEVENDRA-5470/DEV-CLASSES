#include<stdio.h>
void check_age(){
    int stu_age=17;

    int elg_age=19;

    if (stu_age>elg_age){

        printf("You are not eligible for playing under 19");
        printf("Ritika");
    }

    else{
        printf("You are eligible for playing under 19\n");
        printf("Suzal");
    }
}

int main(){
    check_age();
    return 0;
}

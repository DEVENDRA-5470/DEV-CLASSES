#include<stdio.h>

int check_eligibilty(){
    int pre;
    printf("Enter your pre marks :\n");
    scanf("%d",&pre);
    if (pre>300){
        printf("Tum per mein pass hogye..\n");

        int mains;
        printf("Enter your mains Marks : \n");
        scanf("%d",&mains);
        if (mains>600){
            printf("Tum mains mein bhi pass hogye..\n");

            int inter;
            printf("Enter your inter marks : ");
            scanf("%d",&inter);
            if (inter>700){
                printf("Tum ias ban gye..\n");

            }else{
                printf("Tum ias nahi ban paye..\n");
            }


        }else{
            printf("Sorry, tum mains mein fail hogye..\n");
        }

    }else{
        printf("Sorry, tum pre mein fail hogye..\n");
    }
}





int main(){
    check_eligibilty();
    return 0;
}
#include<stdio.h>
// Task upsc : pri>mains>interview

int upsc_exam(){
    int pre;
    printf("Enter your pre marks : ");
    scanf("%d",&pre);
    if (pre>=300){
        printf("Tum pre mein pass ho..!\n");

        int mains;
        printf("Enter your mains marks : ");
        scanf("%d",&mains);
        if (mains>=500){
            printf("Tum mains mein pass ho..!\n");

            int interw;
            printf("Enter your interview marks : ");
            scanf("%d",&interw);
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
        printf("Tum pre mein fail ho..!\n");
    }
}




int main(){
    // nested_ifelse();
    upsc_exam();
    return 0;
}

#include<stdio.h>

int main(){
    int num_of_elm;

    printf("Enter number of elements in the array : ");
    scanf("%d",&num_of_elm);


    int my_arr[num_of_elm];

    for(int i=0; i< num_of_elm ;i++){
            printf("Enter element %d:",i+1);
            scanf("%d",&my_arr[i]);

    }


    for (int i=0; i< num_of_elm ; i++){
        printf("%d \n",my_arr[i]);
    }
}

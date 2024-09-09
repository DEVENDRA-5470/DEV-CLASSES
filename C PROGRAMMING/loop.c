#include<stdio.h>
int one_to_ten(){
    for(int i=0 ; i<=10 ; i++){
        printf("%d \n",i);
    }
}


int one_to_ten_while(){
    int i=0;
    while (i<10){
        printf("%d \n",i);
        i++;
    }
}





int main(){
    one_to_ten();
    printf("This is while loop \n");
    one_to_ten_while();
    return 0;
}
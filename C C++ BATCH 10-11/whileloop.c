#include<stdio.h>

int one_to_ten(){
    int i=0;
    while (i<=10){
        printf("%d\n",i);
        
        i++;
    }
}

// do while

int one_to_ten_do(){
    int i=10;
    do{
        printf("%d\n",i);
        i++;
    }while(i<=12);

}

int main(){
    // one_to_ten();
    one_to_ten_do();
    
    return 0;
}
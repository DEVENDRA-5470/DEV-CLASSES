#include<stdio.h>

int break_loop(){
    for(int i=1; i<=15 ; i++ ){
        if (i%2==0){
            //break;
            continue;
        }
        printf("%d ",i);
    }
}

int main(){
    break_loop();
    return 0;
}

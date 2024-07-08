#include<stdio.h>

int linear_search(int arr[],int size,int key){

    for (int i=0; i<size ;i++){
        if (arr[i] == key){
            return i;
        }
    }

    return -1;

}


int arr_sum(int arr[],int size){
    int sum =0;

    for (int i=0; i<size ;i++){
            sum=sum+arr[i];
            //0=0+20
            //20=20+12

        }
    return sum;

    }





int main(){
    int arr[]={1,2,3};

    int size=sizeof(arr)/sizeof(arr[0]);

    //int key =90;

    //int res=linear_search(arr,size,key);

    //if (res == -1){
      //  printf("Element Not founded...\n");
    //}
    //else{
     //   printf("Element %d Founded at index :%d\n",key,res);
    //}


    int sum=arr_sum(arr,size);
    printf("Sum :%d",sum);
}

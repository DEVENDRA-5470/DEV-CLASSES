// // Properties
// 1.Array in c a fixed-size of collection of elements for the same data types stored
// in contigeous memory location.

// 2.Elements of array are accessed by using index which indicates the positon of elements in the array.

// 3.Fixed-Size : Array in c have predefined number of elements taht
// is specified at compile-time.

// 4.Same Date Type: All elements in an array must be the same data type.

// 5.Indexed : Elements are accesed by using sqaure bracket ([]) and
// index of the element star from zero [0].

// 6.Mutabality(changeable):
// Array in c are mutable mean you can modify the element of array after defining.

#include<stdio.h>


int first_array(){
    int my_arr[5];
    my_arr[0]=100;
    my_arr[1]=200;
    my_arr[2]=300;
    my_arr[3]=400;
    my_arr[4]=50.8930;

    for(int i=0; i<5; i++){
        printf("my_arr[%d] = %d\n",i,my_arr[i]);
    }

    my_arr[0]=700;
    //printf("my_arr[0] = %d\n",my_arr[4]);

    for(int i=0; i<5; i++){
        printf("my_arr[%d] = %d\n",i,my_arr[i]);
    }
}


int second_arr(){
    int marks[5]={35,45,65,75,80};
    int size=sizeof(marks)/sizeof(marks[0]);
    printf("Size of marks : %d\n",size);

    for (int i=0;i<size ; i++){
        printf("Marks %d\n",marks[i] );
    }

}

int main(){
    //first_array();
    second_arr();
    return 0;
}

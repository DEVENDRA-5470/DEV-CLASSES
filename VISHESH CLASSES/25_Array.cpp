// Array in c++
// Array in c++ is a collection of elements of the same data type.
// Array allows to store the multiple values of the same type in single variable.

// data_type array_name[size]

#include<iostream>
using namespace std;

int my_array(){
    int marks_10th[10]={100,200,37,49,50,60,45,98,67,88};
    //cout << "Result :" << marks_10th[6] << endl;
    //cout << "Result :" << marks_10th[1] << endl;
    //cout << "Result :" << marks_10th[2] << endl;

    for (int i=0 ; i<10 ; i++){
        cout << "Result :" << marks_10th[i] << endl;
    }

    // sum of array.
    // product of array.
    // find odd even from array.
}

int check_odd_even(){
    int marks_10th[11]={100,200,37,49,50,60,45,98,67,88,99};

    for (int i=0 ; i<11 ; i++){

        if (marks_10th[i]%2==0){
        cout << marks_10th[i] << " : EVEN" << endl;
        }
        else{
        cout << marks_10th[i] << " : ODD" << endl;
        }

    }
}

void new_array(){
    int new_arr[]={23,45,67,90,67,45,78,93,89,99,66,44};
    int arr_size=sizeof(new_arr)/sizeof(new_arr[0]);
    cout << arr_size << endl;

    for (int i=0; i<arr_size ; i++){
      cout << new_arr[i] << endl;
    }
}

void input_array(){
    int i=0;
    int numbers[]={7};

    for (int i=0; i<10 ; i++){
      i=i+1;
      cout << sizeof(numbers) << endl;
    }




}

int main(){
    //my_array();
    //check_odd_even();
    //new_array();
    // input_array();
}

// array
// string
// oops
// complete.

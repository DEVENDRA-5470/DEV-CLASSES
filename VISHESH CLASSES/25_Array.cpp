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

    // sum of array
    // product of array
    // find odd even from array
}

int main(){
    my_array();
}

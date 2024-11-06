#include <iostream>
using namespace std;

int swapping(int *a , int *b) {
    int z =*a ;
    *a=*b;
    *b=z;
}

int main(){
    int a,b;
    a=10;
    b=20;
    cout <<"BEFORE SWAPPING :" << endl;
    cout << a << " " << b << endl;
    swapping(&a,&b);
    cout <<"AFTER SWAPPING :" << endl;
    cout << a << " " << b << endl;
}

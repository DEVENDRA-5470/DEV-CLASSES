// Pointer is a special variable is used to store (memory address of a variable) (*ptr pointer)
// & address of operator (reference)
#include <iostream>
using namespace std;

int var_address(){
    int n=30;
    int m=10;
    int *p; // Declare
    int *p1;
    p=&n;
    p1=&m;
    cout << p << endl;
    cout << p1 << endl;
}


int main(){
    var_address();
}


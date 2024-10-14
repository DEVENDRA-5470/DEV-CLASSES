#include <iostream>
using namespace std;

// Logical operator and(&&) , or(||) , not(!)

int check_age(){
    int a1 = 23;
    int b1 = 24;
    // int c= a1==23 && b1==24 && a1==20 && b1<20 && b1==24; // It gives true when all condition true otherwise false.
    // int c = a1==23 || b1==24 || b1==20; // It gives true when any condition true otherwise false.
    int c= !(a1==23 && b1==24); // It reverse the result.


    cout << "OutPut :" << c << endl;
}

int main(){
    check_age();
    return 0;
}
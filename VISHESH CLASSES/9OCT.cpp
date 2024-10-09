#include <iostream>
#include <iomanip>
#include <typeinfo>
using namespace std;

// TYPE CONVERSION-> Implicit conversion AND TYPE CASTING-> Explicit conversion
void decimal_to_int(){
    double d1=45.56690;
    int n1=d1;
    cout <<  d1 << endl;
    cout <<  n1 << endl;
}

void int_to_dec(){
    int n1=45;
    double d1=n1;
    cout <<  fixed << setprecision(1) << d1 <<  endl;
    cout <<  n1 << endl;
}

void int_to_string(){
    int n1=2345;
    string s1=to_string(n1);
    cout << "Type of n1 " << typeid(n1).name() << endl;
    cout << "Type of s1 " << typeid(s1).name() << endl;
    cout << s1 << endl;

}

void swap_me(){
    int n1=20;
    int n2=30;
    cout << "Value of n1 BS :" << n1 <<"\n"<< "Value of n2 BS :" << n2 << endl;
}

int main(){
    //decimal_to_int();
    //int_to_dec();
    //int_to_string();
    swap_me();
    return 0;

}


// B1=P1
// B2=P2
// B3=P1
// B1=P2
// B2=B3

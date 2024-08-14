// 3.------------- Extern storage class.
    //1.The extern storage class is used to declare a global variable of function that is
    // defined in another file.

    //2.It tells the compiler that the variable or function exists but its defination
    // is located elsewhere.

    //3.Default value = undefined;

    //4.Scope or Visibility = The variable or function can be accessed form
    // any file in the program where it is declared as extern.

    //5.Storage =RAM

#include<iostream>
using namespace std;

extern int global=1;

void print_global(){
    cout << "Global : " << global << endl;
}


int main(){
    print_global();
    cout << "Global :" << global << endl;
    return 0;
}


// Function is block of code and easy to reuse.
// Every function has their own purpose.

// void can not return value of function.
// int function return int
// string function string

// 1.Take something return nothing
// 2.Take something return something
// 3.Take Nothing return nothing.
// 4.Take Nothing return something.

// Parameter ()

#include <iostream>
using namespace std;

// 1.Take something return Nothing
/*int add(int a=0,int b=0){ // Parameter
    int res;
    res=a+b;
    cout << res << endl;
}

int main(){
    add(12,12); // Arguments
}
*/

// 2.Take something return Something
/*int add(int a=0,int b=0){ // Parameter
    int res;
    res=a+b;
    return res;

    //cout << res << endl;
}

int main(){
    int z;
    z=add(12,12); // Arguments
    cout << z << endl;

}*/

// 3.Take Noting return Noting
/*int add(int a=0,int b=0){ // Parameter
    int res;
    res=a+b;
    cout << res << endl;
}

int main(){
    add(12,12); // Arguments


}*/


// 3.Take Nothing return Something
int add(){ // Parameter
    int a=90;
    int b=80;
    int res;
    res=a+b;
    return res;
}

int main(){
    int data;
    data=add(); // Arguments
    cout << data << endl;


}
// What is pointer
// 1.Call by value
// 2.Call by Reference

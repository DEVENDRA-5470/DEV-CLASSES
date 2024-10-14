#include <iostream>
using namespace std;

// Increament and Decreament oprator
    // ++ : increament 
    // -- : Decreament

    // prefix : ++a
    // postfix :a++


int main(){
    // int a=4;
    // cout << "The Original Value of a : " << a << endl;
    // ++a;
    // ++a;
    // cout << "The Value of a after prefix : " << a << endl;

    // int a=4;
    // cout << "The Original Value of a : " << a << endl;
    // a++;
    // cout << "The Value of a after postfix : " << a << endl;

    int a=5;
    int b=5;
    // int prefix = ++a;
    // cout << "The Value of a after prefix : " << prefix << endl;

    // int postfix = b++;
    // cout << "The Value of b after postfix : " << postfix << endl;

    int prefix = --a;
    cout << "The Value of a after prefix : " << prefix << endl;

    int postfix = b--;
    cout << "The Value of b after postfix : " << postfix << endl;
    
    

    return 0;

}
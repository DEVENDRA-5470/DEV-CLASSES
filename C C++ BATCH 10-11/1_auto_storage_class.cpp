// ----------auto storage class
// 1.The auto storage class is the default storage class for all
     //local variables.
// 2.When you use auto keyword ,compiler automatically determines
    // the type of variable according to type of data.
// 3.Default Value : Garbage.
// 4.Scope or visibility : Limited to the block in which they are defined
// 5.Storage = RAM (static memory)
// 6.Every local Variable in c by default automatic variable.

#include<iostream>
#include<typeinfo>
using namespace std;
int main(){
    int x;
    auto num = 10;
    auto salary =45000.50;
    auto character='R';

    cout << "Type of Num :"<< typeid(num).name() << endl;
    cout << "Type of Salary :"<< typeid(salary).name() << endl;
    cout << "Type of character :"<< typeid(character).name() << endl;
    count << x << endl;

    return 0;
}



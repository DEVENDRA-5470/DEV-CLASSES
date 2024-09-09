// 2. --------------Static storage class
    // 1.The static storage class is used to extend the lifetime of variables to the
    // entire runtime of the program.

    // 2.when you use the static keyword the variable retains its value between
    // function calls

    // 3.Default value = 0
    // 4.Scope or Visibility = Limited to the block in which they are defined.
    // 5.Storage = RAM (static memory)

#include<iostream>
using namespace std;
void increment(){

static int counter;
counter++;
cout << "Counter :"<< counter <<endl;
}

int main(){
    increment();
    increment();
    increment();
    increment();
    increment();
    return 0;
}

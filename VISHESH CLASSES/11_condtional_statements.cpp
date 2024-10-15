#include <iostream>
using namespace std;


int check_odd_even(){
    int num1=23;
    if (num1%2==0){
        cout << "Even : " << num1 << endl;
    }
    else{
        cout << "Odd : " << num1 << endl;
    }
}

int main(){
    check_odd_even();
    return 0;
}
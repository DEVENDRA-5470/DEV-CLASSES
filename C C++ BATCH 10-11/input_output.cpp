#include<iostream>
using namespace std;

int first(){
    int num1;
    int num2;
    int res;

    cout << "Enter your number 1 :";
    cin >> num1;

    cout << "Enter your number 2 :";
    cin >> num2 ;

    res=num1+num2;
    cout << "Result :" << res;


}


void my_name(){
    string user_name;

    cout << "Enter your name :";
    cin >> user_name ;

    cout << "Name :" << user_name;

}



int main(){
    //first();
    my_name();
    return 0;
}

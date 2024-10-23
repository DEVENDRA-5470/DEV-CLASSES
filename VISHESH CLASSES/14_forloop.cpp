#include <iostream>
#include <string>
using namespace std;

void print_one_to_ten(){

    for (int i=1 ; i<=10 ;i++ ){
        cout << i << endl;
    }
}

void print_ten_to_one(){

    for (int i=10 ; i>0 ;i-- ){
        cout << i << endl;
    }
}

void print_steps(){

    for (int i=1 ; i<=10 ;i+=2 ){
        cout << i << endl;
    }
}



// Nested Loops

void nested_loop(){
    for (int i=0 ; i<5 ; i++){
        cout << "This is outer loop----------" << endl;

        for (int j=0 ; j<5 ; j++){
            cout << "This is inner loop" << endl;
        }
    }
}



int main(){
    //print_one_to_ten();
    //cout << "REVERSE 10 TO 1" << endl;
    //print_ten_to_one();
    //cout << "STEPS OF 2" << endl;
    //print_steps();
    nested_loop();
}

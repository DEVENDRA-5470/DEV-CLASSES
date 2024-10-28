#include <iostream>
#include <string>
using namespace std;

// initialization
// condition
// increament/decrement

void print_one_to_ten(){

    int i=1; //initialization
    do{
        cout << i << endl;
        i++;
    }while(i<10);
}


void print_ten_to_one(){

    for (int i=10 ; i>0 ;i-- ){
        cout << i << endl;
    }
}

void print_steps(){
    int i;
    for (i=1 ; i<=10 ;i+=2 ){
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

void sum_product(){
    int sum=1;

    int start ,ends;
    cout << "Enter your start point :";
    cin >> start;
    cout << "Enter your End point :" ;
    cin >> ends;
    for (start ; start<=ends ; start++){
        //cout << start << endl;
        sum=sum*start;
        cout << sum << endl;
    }
    cout << "Total Sum :" << sum << endl;
}


int main(){
    print_one_to_ten();
    //cout << "REVERSE 10 TO 1" << endl;
    //print_ten_to_one();
    //cout << "STEPS OF 2" << endl;
    //print_steps();
    //nested_loop();
    //sum_product();
}

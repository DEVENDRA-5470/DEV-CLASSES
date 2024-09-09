#include<iostream>
using namespace std;

/*
*
* *
* * *
* * * *
* * * * *
*/

void first(){
    for(int row=1; row<=6 ;row++){

        for (int col=1; col<=row ; col++ ){
            cout<<"* ";

        }
        cout<<" "<<endl;
    };
}

void second(){
    for(int row=1; row<=6 ;row++){

        for (int col=6; col>=row ; col-- ){
            cout<<"* ";

        }
        cout<<" "<<endl;
    };
}

int main(){
    //first();
    second();
    return 0;
}

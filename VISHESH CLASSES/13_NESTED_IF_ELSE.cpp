#include <iostream>
using namespace std;

int main(){
    int marks=70;
    string stream="PCM";

    if (marks > 60 ){
        cout << "PASS IN MARKING" << endl;

        if (stream=="PCB"){
            cout << "ADMISSION DONE" << endl;
        }
        else{
            cout << "FAILED IN STREAM" << endl;
        }
    }

    else{
        cout << "FAILED IN MARKING" << endl;
    }
}

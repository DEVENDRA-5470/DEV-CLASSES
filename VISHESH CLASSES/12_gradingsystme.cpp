#include <iostream>
using namespace std;

void grading(){
    int stu_marks;
    cout << "Enter your marks : ";
    cin >> stu_marks;

    if (stu_marks <=100 && stu_marks >= 90){
        cout <<"A GRADE" << endl;
    }

    else if (stu_marks <90 && stu_marks >= 80){
        cout <<"B GRADE" << endl;
    }

    else if (stu_marks <80 && stu_marks >= 60){
        cout <<"C GRADE" << endl;
    }

    else if(stu_marks < 60){
        cout <<"FAIL HO " << endl;
    }
    else{
        cout <<"Invalid INput"<<endl;
    }
}

int main(){
    grading();
}

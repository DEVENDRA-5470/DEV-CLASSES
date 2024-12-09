// A structure in c++ a user-defined data type that groups related data
// of different types in a single name.

// Structure allow you to store multiple data of information
// about a single entity.

#include <iostream>
#include <string>
using namespace std;

int my_structure(){

    struct Student_profile {
    string stu_name ;
    int stu_age;
    int stu_roll;
    string stu_address;
    int stu_mob;
    };

    Student_profile stu1;

    string stu_name ;
    int stu_age;
    int stu_roll;
    string stu_address;
    int stu_mob;

    cout << "ENTER YOUR NAME :" << endl;
    cin >> stu_name ;

    cout << "ENTER YOUR AGE :" << endl;
    cin >> stu_age ;

    cout << "ENTER YOUR ROLL NO :" << endl;
    cin >> stu_roll ;

    cout << "ENTER YOUR ADDRESS :" << endl;
    cin >> stu_address ;

    cout << "ENTER YOUR MOBILE NO :" << endl;
    cin >> stu_mob ;

    stu1.stu_name=stu_name;
    stu1.stu_age=stu_age;
    stu1.stu_roll=stu_roll;
    stu1.stu_mob=stu_mob;
    stu1.stu_address=stu_address;

    Student_profile stu2;
    stu2.stu_name="Dev";
    stu2.stu_age=20;
    stu2.stu_roll=4545;
    stu2.stu_mob=789989809;


    Student_profile stu3;
    stu3.stu_name="Rohit";
    stu3.stu_age=20;
    stu3.stu_roll=4545;
    stu3.stu_mob=789989809;
    stu3.stu_address="FARIDABAD";


    cout << "Student Name :" << stu2.stu_name << endl;
    cout << "Student Age :" << stu2.stu_age << endl;
    cout << "Student Roll :" << stu2.stu_roll << endl;
    cout << "Student mob :" << stu2.stu_mob << endl;
    cout << "Student Address :" << stu2.stu_address << endl;

}

int main(){
    my_structure();
    return 0;
}


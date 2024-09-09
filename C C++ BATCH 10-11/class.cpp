#include<iostream>
using namespace std;

class Student{
public :
    string name;
    int age;
    string grade;
    int mob_num;
    int marks;


    void show_info(){
        cout<<
        "STUDENT NAME :"   << name <<
        "\nSTUDENT AGE :"  << age <<
        "\nSTUDENT GRADE :"<< grade <<
        "\nSTUDENT MOBILE :"<< mob_num <<
        "\nSTUDENT MARKS :" << marks << endl;

     }
};

int main(){
    Student stu1;
    stu1.name="RANDEEP ";
    stu1.age=18;
    stu1.grade="A++";
    stu1.mob_num=980009980;
    stu1.marks=96;

    stu1.show_info();


    Student stu2;
    stu1.name="Dev ";
    stu1.age=24;
    stu1.grade="A++";
    stu1.mob_num=980009980;
    stu1.marks=96;

    stu1.show_info();


    return 0;

}

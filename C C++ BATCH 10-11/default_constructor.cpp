#include<iostream>
using namespace std;

class Person{
public :
    string name;
    int age ;
    int mob_no;

public :
    // Default constructor.
    Person(){
        name="Ritika";
        age=17;
        mob_no=788990998;
    }

    void display(){
        cout <<

        "Name :"<< name <<
        "\nAge :"<< age <<
        "\nMobile :"<< mob_no <<endl;
    }
};

int main(){
    Person p1;
    p1.display();
}

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
        name="Unknown";
        age=0;
        mob_no=0;
    }

    // Copy constructor.
    Person(const Person& other){
        name=other.name;
        age=other.age;
        mob_no=other.mob_no;
    }

    void set_data(const string& name,int age ,int mob_no){
        this->name=name;
        this->age=age;
        this->mob_no=mob_no;
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
    p1.set_data("Randeep",17,84798478);
    p1.display();
}

#include<iostream>
using namespace std;

class Person{
public :
    string name;
    int age ;
    long long int mob_no;

public :
    // Parameterized constructor.
    Person(const string& name ,int age ,long long int mob_no){
        // this is a keyword that refers to the pointer to the current object it is used within a
        // class to refer the instance of the object on which member function called
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
    Person p1("Randeep",16,897687678);
    p1.display();
    Person p2("Utkarsh",18,89789879897);
    p2.display();
    return 0;
}

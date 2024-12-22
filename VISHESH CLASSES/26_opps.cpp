// OOP: Object oriented programming.
// class: class is a group of data(properties) and features(methods).
// Object : Object is instance which point to the class.

#include <iostream>
using namespace std;

/*class Mobile{
public:
    // Properties(data)
    int mob_price=40000;
    string mob_name="vivo";
    string mob_storage="256gb";
    string mob_ram="8gb";
    string mob_color="blue";

    // Features(method)
    void show_details(){
        cout << "===========Mobile Details==========" << endl;
        cout << "Mobile name :" << mob_name << endl;
        cout << "Mobile ram :" << mob_ram << endl;
        cout << "Mobile color :" << mob_color << endl;
        cout << "Mobile storage :" << mob_storage << endl;
    }


};
int main(){
    Mobile m1;
    Mobile m2;
    m1.show_details();
    m2.show_details();
}*/

//----------------------------------- Constructor -------------------------------

// Implicit : AUTOMATICALLY
// Explicit : MANUALLY

// Constructor : A Constructor in oops is a special member function (method) of class that initializes
// objects of the class.

// It has the same name as the class and does not have any return type value.

// Constructors are called automatically when an object of the class created.

// Types of constructor:
    // 1.Default constructor:
            // A constructor that takes no args.
    // 2.Parameterized constructor:
            // A constructor that takes args to initialize the object with specific value.
    // 3.Copy constructor:
            // A constructor that initialize an object using another object of the same class.


// 1.Default constructor:
/*class Person{
public :
    string per_name;
    int per_age;
    string per_gender;
    long long int per_mob_no;

public :
    // 1.Default constructor
    Person(){
        per_name="Dev";
        per_age=24;
        per_gender="M";
        per_mob_no=8999998867;
    }


    void show_details(){
        cout << "===========Person Details==========" << endl;
        cout << "PERSON NAME : " << per_name <<
        "\nPERSON AGE : " << per_age <<
        "\nPERSON GENDER : "<< per_gender<<
        "\nPERSON MOBILE : "<< per_mob_no<< endl;
    }

};

int main(){
    Person p1;
    p1.show_details();
    return 0;
};*/


// 2.Parameterized constructor:
class Person{
public :
    string per_name;
    int per_age;
    string per_gender;
    long long int per_mob_no;

public :
    // 2.Parameterized constructor:
    Person(const string& per_name , int per_age , const string& per_gender , long long int per_mob_no){
        // this keyword points to the current object of a instance/object.
        this->per_name=per_name;
        this->per_age=per_age;
        this->per_gender=per_gender;
        this->per_mob_no=per_mob_no;
    }

    void show_details(){
        cout << "===========Person Details==========" << endl;
        cout << "PERSON NAME : " << per_name <<
        "\nPERSON AGE : " << per_age <<
        "\nPERSON GENDER : "<< per_gender<<
        "\nPERSON MOBILE : "<< per_mob_no<< endl;
    }

};

int main(){
    Person p1("RANDEEP",20,"Female",9999999999);
    Person p2("VISHESH",20,"Male",9999999999);
    Person p3("Dev",24,"Male",9999999999);
    p1.show_details();
    p2.show_details();
    p3.show_details();
    return 0;
};

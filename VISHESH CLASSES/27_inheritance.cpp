// Inheritance : Inheritance means
// inheriting properties or methods of parent class by child class.

/*1.Base class(parent class):
    The class whose properties and methods are inherited.

2.Derived class(base class):
    The class that inherits properties and method of baseclass.

Types of inheritance:
    1.Single inheritance:
        A derived class with only one base class.

    2.Multiple inheritance :
        A one base class  with more than derived class.

    3.Multilevel inheritance :
        A class derived from another derived class.

    4.Heirarchial inheritance :
        Multiple classes derived from a single base class.

    5.Hybrid inheritance :
        A combination of two or more types of inheritance.

*/

// 1.Single inheritance.
/*#include <iostream>
using namespace std;
// Base Class
class Parent{
public:
    int p_money=800000;
    string p_car="Wagonr";
    string p_home="4bhk";


};

// Derived class

class Child : public Parent{
public:
    int c_money=20000;
    string c_car="None";
    string c_home="None";
};



int main(){
    Parent p1;
    Child c1;
    cout << "Parent Money : "<< p1.p_money << endl;
    cout << "Childs Parent Money : "<< c1.p_money << endl;
    cout << "Childs Parent Car : "<< c1.p_car << endl;
    cout << "Childs Car : "<< c1.c_car << endl;
}*/


// 2.Multiple inheritance.
#include <iostream>
using namespace std;
// Base Class
class Parent{
public:
    int p_money=800000;
    string p_car="Wagonr";
    string p_home="4bhk";


};

// Derived class1

class Child1 : public Parent{
public:
    int c1_money=20000;
    string c1_car="None";
    string c1_home="1bhk";
};

// Derived class2
class Child2 : public Parent{
public:
    int c2_money=10000;
    string c2_car="None";
    string c2_home="None";
};

int main(){
    Child1 c1;

    cout << "====== CHILD1 Details======" << endl;
    cout << "CHILD1 MONEY : "<<c1.p_car << endl;
    cout << "CHILD1 CAR : "<<c1.c1_car << endl;
    cout << "CHILD1 HOME : "<<c1.c1_home << endl;

    Child2 c2;
    cout << "====== CHILD2 Details======" << endl;
    cout << "CHILD2 MONEY : "<<c2.p_money << endl;
    cout << "CHILD2 CAR : "<<c2.c2_car << endl;
    cout << "CHILD2 HOME : "<<c2.c2_home << endl;
}

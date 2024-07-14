#include<iostream>
using namespace std;
// Base class
class Parent{
public :
    int pmoney=5000;
    string pcar_name="Audi";
    string phome="4bhk";

    void show_pdata(){
        cout<<"======Parent Data======= "<<endl;
        cout <<
        "Parent Money :" << pmoney <<
        "\nParent Car :" << pcar_name<<
        "\nParent Home :" << phome << endl;

    }

};

// Derived class (child)
class Child : public Parent{
public:
    int cmoney=500;
    string ccar_name="nano";
    string chome="1bhk";

     void show_cdata(){
        cout<<"======Child Data======= "<<endl;
        cout <<
        "Child Money :" << cmoney <<
        "\nChild Car :" << ccar_name<<
        "\nChild Home :" << chome << endl;

    }
};

class Child2 : public Parent{
public:
    int cmoney=500;
    string ccar_name="nano";
    string chome="1bhk";

     void show_cdata(){
        cout<<"======Child Data======= "<<endl;
        cout <<
        "Child Money :" << cmoney <<
        "\nChild Car :" << ccar_name<<
        "\nChild Home :" << chome << endl;

    }
};

int main(){
    Child c1;
    Child2 newchild1;
    //cout<< c1.pcar_name<<endl;
    c1.show_pdata();
    c1.show_cdata();
    newchild1.show_pdata();
    return 0;

}

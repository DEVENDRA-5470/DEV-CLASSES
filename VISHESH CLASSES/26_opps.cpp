// OOP: Object oriented programming.
// class: class is a group of data(properties) and features(methods).
// Object : Object is instance which point to the class.

#include <iostream>
using namespace std;

class Mobile{
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
    m1.show_details();
}

#include <iostream>
#include <fstream> // use to work with files
using namespace std;


int my_file() {
    ofstream outfile("my_file.txt");
    if (!outfile) {
        cout << "Sorry this name File not exist! \n";
    }
    else {
        cout << "File created\n";//, name, age, mob
    }
    string user_Name;
    cout<<"Enter your Name : \n";
    cin >> user_Name;

    string user_age;
    cout << "Enter your age : \n";
    cin >> user_age;

    string user_mob_no;
    cout << "Enter your Mobile number : \n";
    cin >> user_mob_no;

    outfile << user_Name << "\n";
    outfile << user_age << "\n";
    outfile << user_mob_no << "\n";

    outfile.close();
    return 0;
}

int main(){
    my_file();
}



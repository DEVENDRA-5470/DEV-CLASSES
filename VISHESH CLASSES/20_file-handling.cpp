// File is a path location on computers memory.
// 1.Text File -.txt,.docs,.csv
// 2.Binary Files - Media (img,vedio,audio)

// Creating
// Writing
// Reading
// Updating
// Deleting
// Rename

#include <iostream>
using namespace std;
#include <fstream> // use to work with files

int create_file(){
    // ofstream : open and create file
    ofstream outfile("Demo2.txt");

    if (!outfile){
        cout << "File not found.." << endl;
    }
    else{
        cout << "File Created " << endl;
    }
    outfile << "Hello i am vishesh and i am learning C++ progrmming lang..\n";
    // multiline string : R"()"
    outfile << R"(I am a self-taught programmer and an enthusiastic Full Stack Developer with a strong foundation in both
front-end aionateI am a self-taught programmer and an
frame thon, Django, and various web development
various web development
frameworks, I am passionate)";

    string user_data;
    cout << "Enter about you self : " << endl;
    cin >> user_data;

    outfile << user_data;

    outfile.close();

}

int write_data(){
    string user_data;
    cout << "Enter about you self : " << endl;
    getline(cin,user_data);

    ofstream file("Demo.txt");
    if (file.is_open()){
        file << user_data;
        file.close();
    }
    else{
        cout << "Unable to open file" << endl ;
    }

}

int main(){
    write_data();
    return 0;
}

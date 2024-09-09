#include<iostream>
#include<fstream>
using namespace std;

int create_write(){
    ofstream outFile("demo.txt");
    if (!outFile){
        // cerr=character erro
        cerr << "Unable open file for writing" << endl;;
        return 1;
    }

     outFile << "This is an example of writing to a file .\n";
     outFile << "File handling in c++ is simple!\n";
     outFile.close();
     return 0;
}

int main(){
    create_write();
    return 0;
}

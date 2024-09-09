#include<iostream>
#include<fstream>
using namespace std;

int reading(){
    ifstream inFile("demo.txt");
    if(!inFile){
        cout<<"File not found"<<endl;
    }
    else{
        cout<<"File found"<<endl;
    };
    string line;
    while (getline(inFile,line)){

        cout<< line <<endl;
    }
}

int main(){
    reading();
    return 0;
}

#include <iostream>
#include <cstdio> // rename and remove file
#include <string>
using namespace std;

void file_rename(){
    const char* oldfile="demo.txt";
    const char* newfile="dreamer.txt";

    if ( rename(oldfile , newfile) ){
        cout <<" file rename ho gya hai " << endl;
    }
    else{
        cout <<" kuch error hai "<< endl;
    }
}


void file_remove(){
    const char* file="vishesh.txt";
    if (remove(file) == 0 ){
        cout <<" file remove ho gya hai" << endl;
    }
    else {
        cout <<" kuch error hai "<< endl;
    }
}


int main(){
   //file_rename();
   file_remove();
   return 0;
}

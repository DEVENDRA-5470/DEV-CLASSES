#include<iostream>
#include<cstdio>
using namespace std;

int main(){
    const char* filename="demo.txt";

    if (filename){
        remove(filename);
    }
    else{
        cerr<< "File not found..."<<endl;
    }

    return 0;

}

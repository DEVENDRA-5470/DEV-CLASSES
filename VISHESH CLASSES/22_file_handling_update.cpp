#include <iostream>
#include <fstream>
#include <string>
using namespace std;

void updateFile(const string& filename ,const string& oldline ,const string& newline){
    ifstream input_file(filename);
    ofstream temp_file("vishesh1.txt");

    if (!input_file || !temp_file){
        cerr <<"Error opening File" << endl;
        return ;
    }

    string line ;
    bool is_update=false;

    // Read the content of the original file

    while(getline(input_file,line)){
        // check if the current line matches the one to be updated.
        if(line == oldline && !is_update){
            temp_file << newline << endl;
            is_update=true;


        }else{
            temp_file << line << endl;
            // write the original line to the temp file
        }
    }
    input_file.close();
    temp_file.close();

    remove(filename.c_str());
    rename("temp.txt",filename.c_str());

    if (is_update){
        cout <<  "file updated succefully" << endl;
    }
    else{
        cout << "Line not found in the file."<< endl;
    }


}


int main(){
    string filename="demo1.txt";
    string oldline="old content to be repalced";
    string newline="Updated Content";

    updateFile(filename,oldline,newline);
    return 0;
}

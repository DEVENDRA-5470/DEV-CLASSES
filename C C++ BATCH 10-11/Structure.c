#include<stdio.h>

// Structure (struct) is a user-defined data type that allows you
// to combine data item of different types.

// Structure used to represent a record or data set.
// and manage more effeciently.


struct Student{
    char name[50];
    int roll_no;
    float marks;
};



int main(){
    struct Student student1;

    strcpy(student1.name,"Randeep");
    student1.roll_no=101;
    student1.marks=90;

    printf("Name %s\n",student1.name);


    return 0;
}

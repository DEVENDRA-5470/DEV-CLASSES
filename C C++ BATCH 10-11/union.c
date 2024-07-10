// C Program to demonstrate how to use union
#include<stdio.h>
#include<string.h>


//Both structure and union are used to store multiple data types,
//but they are not the same.
//They differ in memory usage and data organization,
//a structure stores multiple data types of different sizes,
//while a union stores multiple data types of the same size in the
//same location.

// union template or declaration
#include <stdio.h>

// union template or declaration
union un {
    int roll_no;
    char name[20];
    float marks;
};

// driver code
int main() {
    // defining a union variable
    union un stu1;

    // initializing the union members
    stu1.roll_no = 15;
    printf("Roll No = %d\n", stu1.roll_no);

    // Name will overwrite roll_no
    strcpy(stu1.name, "randeep");
    printf("Name = %s\n", stu1.name);

    // Marks will overwrite name
    stu1.marks = 75.90;
    printf("Marks = %.2f\n", stu1.marks);

    return 0;
}

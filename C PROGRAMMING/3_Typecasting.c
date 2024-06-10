// Two types of type conversion.
// 1. Implicit type conversion:
//    - Automatic conversion of one data type to another.
//    - Compiler automatic convert one data type to another.
//    - Example: int a =10;
//               double b = a; // Here, int is converted to double.
// 2. Explicit type conversion (type casting):
//    - Manual conversion of one data type to another.
//    - Programmer explicitly convert one data type to another.
//    - Example: double d=12.78;
//               int i = (int)d; // Here, double is converted to int.

// Programmes----------------------------

#include <stdio.h>
#include <stdlib.h>
int main(){
    printf("------------ Int To Double---------------\n");
    int_double();
    printf("------------ Double To Int---------------\n");
    double_int();
    printf("------------ String To Int---------------\n");
    string_int();
    printf("------------ Char To Int---------------\n");
    char_int();
    printf("------------ Int To Char ---------------\n");
    int_char();
    printf("------------ Int To String ------------\n");
    int_string();



    return 0;

}

void int_double(){
    int a = 10;
    printf("Value of a : %d\n",a);
    double b = a; // Implicit type conversion
    printf("Value of b: %f\n", b);
}

void double_int(){
    double d = 12.78;
    printf("Value of d: %f\n", d);
    int i = (int)d; // Explicit type conversion (type casting)
    printf("Value of i: %d\n", i);
}

void string_int(){
    char str[] = "123";
    printf("Value of str: %s\n", str);
    // The atoi() function converts a character string to an integer value. 
    int num = atoi(str); // Explicit type conversion (type casting)
    printf("Value of num: %d\n", num+2);

}

void char_int(){
    char c = 'A';
    printf("Value of c: %c\n", c);
    int i = c; // Implicit type conversion
    printf("Value of i: %d\n", i);
}

void int_char(){
    int i = 65;
    printf("Value of i: %d\n", i);
    char c = (char)i; // Explicit type conversion (type casting)
    printf("Value of c: %c\n", c);
}

void int_string(){
    int num = 123;
    printf("Value of num %d\n",num+2);
    char str[10];
    sprintf(str, "%d", num); // Convert int to string
    printf("Value of str %s\n",str+2);
}
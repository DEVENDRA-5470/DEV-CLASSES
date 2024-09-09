#include<stdio.h>
#include<string.h>

// Structure (struct) is a user-defined data type that allows you
// to combine data item of different types.

// Structure used to represent a record or data set.
// and manage more effeciently.


struct Student{
    char name[50];
    int roll_no;
    float marks;
};

int show_detail(){
    struct Student student1={"Ritika",45,85.5};
    struct Student student2={"Utkarsh",34,80.60};


    printf("Student Details :\n");
    printf("Name :%s\n",student1.name);
    printf("Roll No :%d\n",student1.roll_no);
    printf("Marks :%f\n\n",student1.marks);


    printf("Student Details :\n");
    printf("Name :%s\n",student2.name);
    printf("Roll No :%d\n",student2.roll_no);
    printf("Marks :%f\n",student2.marks);



}


int main(){
    show_detail();
    return 0;
}




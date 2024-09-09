// There are two type Data type 
// 1.Primitive Data type
// Integer(int)
// Floating number (float)
// Charecter (char)
// Boolean (bool> true / false)
// Void


// 2.Non-Primitive Data Type
// Functions
// Arrays
// Pointers
// Structure (struct )
// Unions (union)
// Enumerations (Enum)

// -----------------------------------
// 1.Integer Data Type
    // Store:Interger (+ve,-ve),hexadeciaml,ocatal
    // Ex:long long int var_name=500;
    // Range:-2,147,483,648 to 2,147,483,648
    // Size: 4bytes
    // Format identifier : %d
    // Modifier :   long(4 byets ,%d) 
    //              long long (8bytes)
    //              short(2bytes) 
    //              Signed(default:positive value,%d)
    //              Unsigned (Negative value, %u)

    // Ex:unsigned int var_name=-500;
    
// Programmes------------------------- 
// #include<stdio.h>
// void add(){
//     // int x=10;
//     // int y=20;
//     // int res=x+y;
//     // printf("Result : %d",res);

//     int long unsigned x=-10;
//     int unsigned y=-20;
//     int unsigned res=x-y;
//     printf("Result : %u\n",res);
// }

// void subract(){

// }


// int main(){
//     printf("-------------ADDITION------------------\n\n");
//     add();
//     printf("-------------Subraction------------------");
//     subract();
//     return 0;
// }


// 2.Float Data Type.
// Store : Decimal values (+ve,-ve)
// Ex:float var_name=3.14;
// Range:1.17549435e-38 to 3.40282347e+
// Size:4 bytes
// Format Identifier : %f
// Modifier : double(8 bytes ,%lf) long double (10 bytes .%Lf)


// Programmes----------------------------------------
// #include<stdio.h>

// void mul(){
//     float x=3.14;
//     float y=2.5;
//     float res=x*y;
//     printf("Result : %f\n",res);
// }





// int main(){
//     printf("-------------Multiplication------------------\n");
//     mul();
//     return 0;
// }



//3.Char Data Type
// Store : Single character
// Ex:char var_name='A';
// Range:0 to 255
// Size:1 byte
// Format Identifier : %c
// Modifier : unsigned char (0 to 255), signed char (-128 to 127)

// Programmes---------------------
// #include <stdio.h>

// void mul(){
//     char x='#';
//     char y='%';
//     int res=x+y;
//     printf("Result : %d\n",res);
//     printf("Charectr : %c\n",res);
// }
// int main(){
//     printf("-------------Multiplication------------------\n");
//     mul();
//     return 0;
// }

// 4. Boolean data types
// Store : true or false
// Ex:boolean var_name=true;
// Range:true or false
// Formatidentfier  %d
// Size:1 byte
// Modifier : none

#include<stdio.h>
#include<stdbool.h>
int main(){
    true_false();
    printf("Hello DREAMER");
    return 0;
    printf("Hello DREAMER2");

}

void true_false(){
    bool x=true;
    bool y=false;
    printf("Boolean Value : %d\n",x);
    printf("Boolean Value : %d\n",y);
}


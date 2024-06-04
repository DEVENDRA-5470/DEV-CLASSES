// getchar() : Use to read a single character from the standard input (usually the keyboard).
// putchar() : Use to write a single character to the standard output (usually the screen).
// #include <stdio.h>
// int main() {
//     char c;
//     printf("Enter a character: ");
//     c = getchar();
//     // printf("You entered: %c",c);
//     printf("You entered: ");
//     putchar(c);
//     return 0;
// }


// gets(): function is used to read a line of text from the standard input .
// puts(): function is used to write a string to the standard output .
// #include <stdio.h>
// int main() {
//     char str[50];
//     printf("Enter a line of text: ");
//     gets(str);
//     printf("You entered: ");
//     puts(str);
//     return 0;
    
// }

#include <stdio.h>

int main() {
    char myText[] = "Hello";  // Declare and initialize a character array with the string "Hello"
    printf("%s", myText);     // Print the string stored in myText
    return 0;                 // Return 0 to indicate successful completion of the program
}


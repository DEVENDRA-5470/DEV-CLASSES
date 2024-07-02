#include<stdio.h>
// getchar() : Use to read a single character  from standard input
// (usually from the key borad)

// putchar() : Use to write a single character to standard output (on screen).

int get_char(){
    char my_char;
    printf("Enter a character : ");
    my_char=getchar();
    printf("You entered: ");
    putchar(my_char);
}

// gets(): Method is used to read a string from the Standard input.
// puts():Method is used to write a string on the screen.


int gets_puts(){
    char str[1];
    printf("Enter a line of text: ");
    gets(str);
    printf("You entered :");
    puts(str);

}

int main(){
    gets_puts();
    //get_char();
    return 0;
}



// Comparison opetor
// == (equal to)
// != (not equal to)
// > (greater than)
// < (less than)
// >= (greater than or equal to)
// <= (less than or equal to)

// #include<stdio.h>
// int main(){
//     int n,m;
//     printf("Enter your number n : ");
//     scanf("%d",&n);
//     printf("Enter your number m : ");
//     scanf("%d",&m);
//     if (n==m){
//         printf("Maje hi maje\n");
//     }
//     else{
//         printf("Maje nhi hai\n");
//     }
//     return 0;
// }

// --------------------------- Logical Operator --------------------------
// && (and)
// || (or)
// ! (not)

// #include<stdio.h>
// int main(){
//     int n,m;
//     printf("Enter your number n : ");
//     scanf("%d",&n);
//     printf("Enter your number m : ");
//     scanf("%d",&m);

//     // and(&&)

//     // if (n==12 && m==13 && n<m && n<=m){
//     //     printf("Maje hi maje\n");
//     // }

//     // or (||)

//     //  if (n==12 || m==13 || n<m || n<=m){
//     //     printf("Maje hi maje\n");
//     // }
//     // not (!)

//     if (!(n==12 || m==13 || n<m || n<=m)){
//         printf("Maje hi maje\n");
//     }
//     else{
//         printf("Maje nhi hai\n");
//     }
//     return 0;
// }

// ---------------------------- ternary operator --------------------------
// #include<stdio.h>
// int main(){
//     int n,m;
//     printf("Enter your number n : ");
//     scanf("%d",&n);
//     printf("Enter your number m : ");
//     scanf("%d",&m);
//     !(n>m) ? printf("yse"):printf("no"); // ternary operator

//     return 0;
// }

#include<stdio.h>
int main(){
    int n;
    printf("Enter your number n : ");
    scanf("%d",&n);
    if(n==12){
        printf("Maje hi maje\n");
    }
    else if (n==13)
    {
        printf("Firse Maje hi maje\n");
        
    }
    else if (n==15){
        printf("Teesra Maje hi maje\n");
    }
    else{
        printf("Maje nhi hai\n");
    }
    

    return 0;
}

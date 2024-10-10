// 1.Arithmatic opr
// 2.Relational opr
// 3.Logical opr
// 4.Assignment opr
// 5.Bitwise opr
// 6.Ternary opr
// 7.Unary opr


//------------------------------ Arithmatic opr(+,-,*,/,%)

#include <iostream>
using namespace std;
int divide(){
        int n1,n2,res;
        n1=20;
        n2=4;
        res=n1/n2;
        cout << "Result :" << res << endl;

}

int mod(){
        int n1,n2,res;
        n1=20;
        n2=4;
        res=n1%n2;
        cout << "Result :" << res << endl;

}

//---------------------------------------2.Relational opr(==,>,<,>=,<=,!=)

int age_check(){
    int vishesh,dev,res;
    vishesh =20;
    dev=20;
    //res=vishesh==dev;
    //res=vishesh<dev;
    res=vishesh!=dev;
    cout << res << endl;

}

int main(){
    //divide();
    //mod();
    age_check();

    return 0;
}

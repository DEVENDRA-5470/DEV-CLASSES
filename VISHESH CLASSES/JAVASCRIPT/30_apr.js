// operators in javascript
// data type 
// 1.arithmatic opr (+,-,*,/,%,**,++,--)
// 2.Logical opr ( and(&&), or(||), not(!) )
// 3.comparision opr (<,>,==,<=,>=,!=)
// 4.assignment opr (a=10, a+=10)
// 5.unary opr(unary+,unary-)
// 6.ternary opr (single line condition)

// Data types in js.
// 1.Primitive data type
    // Number : 12,12.2,-89
    // string : "vishes","agra"
    // boolean : true,false
    // undifined : jab varible declare kiya ho but value assing nhi ki ho.let a;
    // null : no-value.
  
// 2.Non-Primitive data type:
    // object :{name:"vishes",city:"faridabad"}
    // Array
    // functions 


// Examples:
// let a; // undefine
// console.log(a)
// console.log(typeof(a))

// let b="xyz"
// console.log(b,typeof(b))

// let c=-23.89
// console.log(c,typeof(c))

// let marks =[67,90,99]
// console.log(marks,typeof(marks))

// let profile ={name:"dev",profession:"trainer/tutor"}
// console.log(profile,typeof(profile))

// 4.assignment opr (a=10, a+=10)

// let a=20
// a=a+12 // standard method
// a*=20 // shorthand method
// console.log(a)

// 6.ternary opr (single line condition)

let num=20
    if (num>=25){
        console.log("ha hai")
    }
    else{
        console.log("nhi hai")
    }

let res=num>=25 ? "ha hai":"nhi hai"
console.log(res)


// write a pro to check the number is divisible by 2 and 3.
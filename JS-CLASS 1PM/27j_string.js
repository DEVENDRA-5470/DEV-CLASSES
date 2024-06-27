//------------------------- String
//Properties of string
// Creation of string
// Accessing of string
// Traversing of string
// In-builted methods of string
// Assignments

//---------- Properties
//1.String is a data structure used to store group of charecter.
//2.String is indexed and ordered.
//3.String is immutable.(unchangeable)
//4.String has various in-builted methods.
// 5. String created by using (''),(""),new keyword.

// ------------ Creating.
//1. Using ('') or (" ")
// let str1="Dreamer Infotech faridabad"
// let str2='Dreamer\nInfotech\nfaridabad'
// let str3=`
// Dreamer 
// Infotech 
// faridabad`
// console.log(str1)
// console.log(str2)
// console.log(str3)

// 2.Using new keyword.
// let str4=new String("Dreamer Infotech faridabad");
// console.log(str4)


// ----------------- Accessing..
// let str1="Dreamer Infotech faridabad"
//1.Using index
// console.log(str1[7])
// size=str1.length
// console.log(size)
// console.log(str1[size-1])


// --------------Traversing of string
// 1.For loop
// let str1="Dreamer Infotech faridabad"
// for(let i=0;i<str1.length;i++){
//     console.log(str1[i])
// }

// 2.For of loop
// let str1="Dreamer Infotech faridabad"
// for (i of str1){
//     console.log(i)
// }

// 3.For in loop
// let str1="Dreamer Infotech faridabad"
// for(i in str1){
//     console.log(str1[i])
// }

// 4.While loop
// let str1="Dreamer Infotech faridabad"
// let i=0;
// while(i<str1.length){
//     console.log(str1[i])
//     i++;
// }

// 5.Do while
// let str1="123456788654234567";
// let i=0;
// do{
//     console.log(str1[i])
//     i++;
// }while(i<str1.length)


// ----------------- methods of string.
// 1.replace()
// let str1="Dreamer Infotech faridabad"
// let res=str1.replace("faridabad","South x")
// console.log(res)
// console.log(str1)

// 2.concat()
// let str1="Dreamer Infotech faridabad"
// let str2=" South x";
// let res = str1.concat(str2)
// console.log(res)

// 3.split()
// let str1="Dreamer Infotech faridabad"
// let res=str1.split()
// let res=str1.split("")
// let res=str1.split(' ')
// console.log(res)

// 4.includes()
// let str1="Dreamer Infotech faridabad"
// let res=str1.includes("x")
// console.log(res)

// 5.trim()
// let str1="   Dreamer Infotech faridabad   "
// console.log(str1)
// let res=str1.trim()
// console.log(res)

// 6.copy()
// let str1="Dreamer Infotech faridabad"
// let res=str1.copy()
// console.log(res)

// 7.slice()
// let str1="Dreamer Infotech faridabad"
// let res=str1.slice(0,20)
// console.log(res)

// // 8.toLowerCase()
// let str1="Dreamer Infotech faridabad"
// let res=str1.toLowerCase()
// console.log(res)

// 9.toUpperCase()
// let str1="Dreamer Infotech faridabad"
// let res=str1.toUpperCase()
// console.log(res) 

// 10.indexOf()
// let str1="Dreamer Infotech faridabad"
// let res=str1.indexOf("I")
// console.log(res)

// 11.charAt()
// let str1="Dreamer Infotech faridabad"
// let res=str1.charAt(0)
// console.log(res)







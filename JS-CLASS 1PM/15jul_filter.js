// Filter function
// 1.HOF:
// A higher-order function is a concept from functional programming
// that referes to a function that meets at least one of following 
// citeria:
//  1. It takes one or more functions as arguments 
//  2. Returns a funtion as output.

// The filter function in javascript apply on array and creates a new
// array with all elements that pass the test implimented by the provided
// callback function.

// callback:
// a function that is called for every element of the Array.apply
// it should retrun true to keep element otherwise false.retrun


// let arr=[78,89,34,90,95,56,52,44,65]

// function check_great(n){
//     return n>70;
// }

// let res=arr.filter(check_great)
// console.log(res)


// let stu_name=['dev','aditya','abhinav','shivani','babita']

// function filter_name(n){
//     for (i of n){
//         if(i=="e"){
//             return true;
//         }
//     }

// }
// let data=stu_name.filter(filter_name)
// console.log(data)

let stu_name=['dev','aditya','abhinav','shivani','babita','ajay','anshu']
// function check(n){
//     if (n[0]=="a"){
//         return true;
//     }
// }
// let res=stu_name.filter(check)
// console.log(res)

let num=[2,3,4,5,67,5,443,334,55,4,3]
let res=stu_name.filter(n => n[0]=="a");
console.log(res)
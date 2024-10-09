// ------------- Functions -------------------
// 1.function is a block of code for doing some specific operation.
// 2.functions are easy to reuse and debug.
// 3.Every function has thier own purpose.

// ----------- Types of function -----------------
// 1.user-defined-function
// 2.In-builted-function


// arguments
// parameters

// -----------Category of function ---------------
// 1.Take something return something
// 2.Take something return nothing
// 3.Take nothing return something
// 4.Take nothing return nothing

// arrow function
// ------------higher order function
        // filter() map()
// closures
// hoisting

//-----------------------------------------------------------------------------
// 1.defining a function
// 2.calling a function

// function shadi(){
//     console.log("welcome to shadi")
// }
// shadi()

// function greet(){
//     let insan="Dev"
//     console.log(`${insan} Good Morning`)
// }
// greet()

// function odd_even(){
//     let odd=[]
//     let even=[]
//     for (let i=0 ; i<10 ; i++){
//         if (i%2==0){
//             even.push(i)
//         }
//         else{
//             odd.push(i)
//         }
//     }

//     console.log(odd)
//     console.log(even)
// }
// odd_even()

// function fact(num){
//     res=1
//     for (let i=1 ; i<=num ; i++){
//         res=res*i
//     }
//     return res
// }
// let data=fact(5)
// console.log(data)


// arrow functions

// let res1=(a,b)=>{return a+b}
// console.log(res1(23,23))

// let res2=(a,b)=>(a+b)
// console.log(res2(23,23))


function great(arr){
    let max=arr[0]
    for (let i=0 ; i<arr.length ; i++){
        if (max<arr[i]){
            max=arr[i]
        }
    }
    return max
}
let res=great([2,3,6,8,45,34,78,88])
console.log(res)
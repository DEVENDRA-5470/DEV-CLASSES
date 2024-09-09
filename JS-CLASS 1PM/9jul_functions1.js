//-------------- Functions

// 1.Every function has thier own purpose.
// 2.Functions are used to reduce the code and easy to debug.
// 3.Functions are used to reuse the code.
// 4.Function is block of code.

// 1.User defined function and in-builted methods.
// 2. Function keyword
// 3. Arrow function 
// 4. HOF (Higher order function)
// 5. Anonymous function


//function two phases
// 1. Definition
// 2. Invoking or calling the function


// parameters and arguments.

// category of function
// 1. Take nothing return nothing
// 2. Take nothing return something
// 3. Take something return nothing
// 4. Take something return something


// let c=0 // global
// function add(){   // Take nothing return nothing
//     let a=10;
//     let b=20;
//     let c=a+b; // local
//     console.log("Result",c)
// }
// console.log(c)
// add(); // Invoking or calling the function





// Take nothing return something
// function add(){   
//     let a=10;
//     let b=20;
//     let c=a+b;
//     return c;
// }
// let x=add(); // Invoking or calling the function
// console.log(x) // Result 30

// Take nothing return something
// function add(){   
//     let a=10;
//     let b=20;
//     let c=a+b;
//     return 'haldiram';
//     return a;
//     return 'shivani'
//     return c;
// }

// function sub(){
//     let a=20;
//     let b=10;
//     let c=a-b;
//     return c;
// }

// function main(){
//     let res=[]
//     let x=add();
//     res.push(x)
//     let y=sub();
//     res.push(y)

//     return res;
    


// }
// let x=main()
// console.log(x) // Result 30

// // Take something return nothing
// function add(a=0,b=0){ //parameter
//     let c=a+b;

//     console.log(c)
// }
// add(1,2) //arguments



// Take something return something
// function add(a=0,b=0){ //parameter
//     let c=a+b;

//     return a;
// }
// let x=add(1,2) //arguments
// console.log(x) 



// function add(a=0,b=0){ //parameter
// console.log("shivani")
//     let c=a+b;
//     console.log("babita")

// console.log('aditya')
//     return c;
// console.log("hello1")
// }
// console.log("hello2")
// let a=10;
// let b=20;
// let x=add(a,b) //arguments
// console.log(x) 


// function check_odd_even(n){
//     if (n%2==0){
//         return "even"
//     }
//     else{
//         return "odd"
//     }
// }
// let n=20
// let res=check_odd_even(n)
// console.log(res)

// function my_elem(s){
//     let my_arr=[]
//     for (let i=0 ; i<s ;i++){
//         my_arr.push(i)
        
//     }
//     return my_arr

// }
// let s=10;
// let data=my_elem(s)
// console.log(data)


// Arrow function
// Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
let s=(a)=>{
    console.log("hello",a);
}
s(10);


let add=(a,b)=>{return a+b}
console.log(add(10,20))
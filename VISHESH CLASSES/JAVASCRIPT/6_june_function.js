//  What is function.
// 1.Every function has thier own purpose.
// 2.Function is a group of code which does a specific task.
// 3.Fuction can be reuses.
// 4.Easy to debug and improve code readability.

// Types of function
// 1.user-defined funtion (function created/defined by user itself)
// 2.inbuilt-function (methods. console.log(),push())


// Content :
// function defination
// function calling
// parameters : types
// arguments : types
// return keyword
// nested funtion (closures)
// arrow function / traditional function




// 1.Traditional function
// function say_hello(){   // function defination
//     console.log("Hello.. How are you") // statements
// }
// say_hello() // calling function.

// 2 .Arrow function
// let fun =()=>(console.log("Hello.. How are you arrow funtion"))
// fun()

// 3.Function expression
// let hello=function(){
//     console.log("Hello.. I am function expression")
// }
// hello()

// 4.IIFE : Immidiately invoked function expression. always use alone or at top of any other function
// (function() {
//     console.log("Hello.. How are you iife")
// })();


// 5.HOF : Higher-Order Function : A function that take another function as arguments or return another function
// Callback function : Passed into another to be called later.

// function say_to_user(callback){
//     let name ="Saurav";
//     callback(name)
// }


// function say_hello(name){
//     console.log(`Hello ${name}`)
// }

// say_to_user(say_hello)


// 6.Closure : A function that remembers variables from its outer lexical scope even after the outer function.
//  has finished. 

//  lexical scope : inner function can access variables from the outer function where they are wriitten.

// function outer_fun(){
//     let count=0;

//     return function inner_fun(){
//         count++;
//         console.log(count)
//     }

// }

// let res = outer_fun()
// res();
// res();
// res();

// Parameter and Arguments.
// let add=(a,b)=>(console.log(a+b),console.log(a-b))
// add(45,90) // arguments


// function add(a,b){
//     console.log(a+b)
// }
// add(34,89)


// Default parameter
// let add=(a=0,b=0)=>(console.log(a+b),console.log(a-b))
// add(50,20) // arguments

// keyword arguments
// let stu_detail=({stu_name,stu_age})=>(console.log(`Stuedent Name :${stu_name} \ Student Age :${stu_age}`));
// stu_detail({stu_age:11,stu_name:"Dev",})

// categories of function.
// 1.take something return nothing.
// 2.take something return something.
// 3.take nothing return nothing.
// 4.take nothing return something.


// 1.take something return nothing.
// let stu_detail=({stu_name,stu_age})=>(console.log(`Stuedent Name :${stu_name} \ Student Age :${stu_age}`));
// stu_detail({stu_age:11,stu_name:"Dev",})


// 2.take something return something.
// let stu_detail=({stu_name,stu_age})=>{ return (`Stuedent Name :${stu_name} \ Student Age :${stu_age}`) };
// let pocket=stu_detail({stu_age:11,stu_name:"Dev",})
// console.log(pocket)

// let add=(a,b)=>{return a+b}
// let res=add(40,50)
// console.log(res+100)


// 3.take nothing return nothing.
// function add(){
//     let a = 20;
//     let b = 40;
//     let res= a + b;
//     console.log(`Result : ${res}`)
// }
// add()


// 4.take nothing return something.
// function add(){
//     let a = 20;
//     let b = 40;
//     let res= a + b;
//     return res;
// }
// let output= add()
// console.log(output)


// Filter() method it only works with array , object.: 

// 1.tradional function.
// let my_arr=[34,89,90,20,10,33,36]
// let even=[]
// let odd=[]
// function odd_even(){
//     for (let i=0 ; i<my_arr.length ; i++){
//         if (my_arr[i]%2==0){
//             even.push(my_arr[i])
//         }
//         else{
//             odd.push(my_arr[i])
//         }
//     }
// }
// odd_even()
// console.log(odd)
// console.log(even)


// 2.arrow function

// let even=[]
// let odd=[]
// let my_arr=[34,89,90,20,10,33,36]
// let odd_even = ()=>{
//  for (let i=0 ; i<my_arr.length ; i++){
//         if (my_arr[i]%2==0){
//             even.push(my_arr[i])
//         }
//         else{
//             odd.push(my_arr[i])
//         }
//     }
// }
// odd_even()
// console.log(odd)
// console.log(even)


// 3.Filter() method : HOF.

// let my_arr=[34,89,90,20,10,33,36]
// let odd= my_arr.filter(n => n%2!=0)
// let odd= my_arr.filter(function(num){return num % 2 != 0})

// let odd= my_arr.filter(callback)
// function callback(num){return num % 2 != 0}

// console.log(odd)

// 4.map() method : HOF
// It transform tha array.

//  let my_arr=[34,89,90,20,10,33,36]
//  let res=my_arr.map(a=>a>30)
//  console.log(res)



// tumko notes banana dairy html-css js
// html-list 
// css-list 
// js list



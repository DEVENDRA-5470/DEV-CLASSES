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
function say_hello(){   // function defination
    console.log("Hello.. How are you") // statements
}
say_hello() // calling function.

// 2 .Arrow function
let fun =()=>(console.log("Hello.. How are you arrow funtion"))
fun()

// 3.Function expression
let hello=function(){
    console.log("Hello.. I am function expression")
}
hello()

// 4.IIFE : Immidiately invoked function expression. always use alone or at top of any other function
// (function() {
//     console.log("Hello.. How are you iife")
// })();


// 5.HOF : Higher-Order Function : A function that take another function as arguments or return another function
// Callback function : Passed into another to be called later.

function say_to_user(callback){
    let name ="Saurav";
    callback(name)
}


function say_hello(name){
    console.log(`Hello ${name}`)
}

say_to_user(say_hello)


// 6.Closure : A function that remembers variables from its outer lexical scope even after the outer function has finished. 

//  lexical scope : inner function can access variables from the outer function where they are wriitten.

function outer_fun(){
    let count=0;

    return function inner_fun(){
        count++;
        console.log(count)
    }

}

let res = outer_fun()
res();
res();
res();




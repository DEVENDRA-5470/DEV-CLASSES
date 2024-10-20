// A closure in JavaScript is a function that has access to variables in its outer scope, even after the outer function has returned. Closures are created when a function is defined inside another function.

function outerfunction(){
    let balance=56000  // local variable
    return function innerfunction(){
        return balance
    }
}

let res = outerfunction()
console.log(res())


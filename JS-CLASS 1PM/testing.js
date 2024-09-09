// Write a function to check given char is vowel or consonant.

function check(n) {
    if (n == 'a' || n == 'e' || n == 'i' || n == 'o' || n == 'u') {
        console.log("Vowel")
    }
    else {
        console.log("Consonant")
    }

}
// check('b')


// Write a function to check number pass by user is odd or even
odd_ar=[]
even_ar=[] 
function check(n) {
    for(let i=1; i<n ; i++){

        if (i % 2 == 0) {
            console.log(i ,"Even")
        }
        else {
            console.log(i ,"Odd")
        }
    }
}
check(8)
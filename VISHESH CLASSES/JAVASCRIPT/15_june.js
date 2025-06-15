// String Defination.
// String Creation.
// String replacement
// String Traversion.
// String in-built methods.

//=================== String Defination
// String is a data structure in Javascript used to store series of chars and number and symbols in the
//('',"",``)

// String Creation.
// let str1="Dev 'dev@123'  vishesh"
// let str2='mai engineer "Hello" hu tum student ho'
// let str3=`tumhara
//  address new-zealand-123 hai `

// console.log(str1)
// console.log(str2)
// console.log(str3)

// console.log(typeof(str1))
// console.log(typeof(str2))
// console.log(typeof(str3))

// String replacement
// let str1="Devvishesh"
// console.log(str1.length)
// console.log(str1[9])
// str1[0]="xyz"
// let rep=str1.replace('D',"xyz")
// console.log(rep)
// console.log(str1)

// String Traversion.
let str1="i am learning mearn stack"
let size=str1.length;
for (let i=0;i<size;i++){
    if (str1[i]=='n'){
        break;
    }
    console.log(str1[i])
}


// String in-built methods.
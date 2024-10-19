// Filter function is higher order function it take another as their arguments (HOF)

// filter(function,array)

// callback : a function that is called for every element of the array.



// function check_great(n){
//     return n>50

// }
// let arr=[78,89,67,33,35,39,23,91,55,43,32]

// let res=arr.filter(check_great)
// console.log(res)


// function check(n){
//     // if (n[0]=="a"){
//     //     return true
//     // }
//     return n[0]=="k"
    
// }

// let stu_name=['anshika','aman','yash','khwaish','dev','ajay']
// let res=stu_name.filter(check)
// console.log(res)

// let stu_name=['anshika','aman','yash','khwaish','dev','ajay']
// let res=stu_name.filter(n=>n[0]=="a")
// console.log(res)


// function great(n){
//     let g=n[0]
//     for (let i=0 ; i<n.length ; i++){
//         if (g.length<n[i].length){
//             g=n[i]
//         }
//     }

//     console.log(g)
// }
// let stu_name=['anshika','aman','yash','khwaishldlkjfd','dev','ajay']
// great(stu_name)



function great(names) {
    let longest = names[0];  // Initialize with the first name
    names.filter(name => {
        if (name.length > longest.length) {
            longest = name;  // Update the longest name if a longer one is found
        }
    });
    console.log(longest);
}
let stu_name = ['anshika', 'aman', 'yash', 'khwaishldlkjfd', 'dev', 'ajay'];
great(stu_name);

// Array -----------------------------------------------------
// 1.Properties
// 2.Creation
// 3.Accessing
// 4.Modification
// 5.Traversing
// 6.In-builted method.
// 7.Assignments.

// 1.Properties---------
// 1.Array is user defined data structure used to store multiple data of different Types of data.
// 2.Array are mutable(changeable).
// 3.Array can be homogeous and hetrogenous.
// 4.Array created by using [] and new keyword.
// 5.Array has many in-builted functions.


// 2.Creation
// 1.Using []
// let my_arr=[45,89,90,'khwaish',"Dreamer"]
// console.log(my_arr)

// let my_arr =new Array(89,90,89.78,78)
// console.log(my_arr)
// let my_arr=[] // empty array


// 3.Accessing

// let my_arr=[45,89,90,'khwaish',"Dreamer"]
// console.log(my_arr[0])
// let size=my_arr.length
// console.log(size)


// 4.Modification

// let my_arr=[45,89,90,'khwaish',"Dreamer"]
// my_arr[0]="DEV"
// console.log(my_arr)

// 5.Traversing.
let my_arr=[45,89,90,78,2,3,5,63,2]
for(let i=0 ;i<my_arr.length ; i++){
    if(my_arr[i]%2==0){
        console.log("EVEN:",my_arr[i])
    }
}

// let my_arr=[45,89,90]
// for (i in my_arr){
//     console.log(my_arr[i])
// }

// let my_arr=[45,89,90]
// for (i of my_arr){
//     console.log(i)
// }

// let my_arr=[77,33,3,332,34544,78]
// let i=0;
// while (i<my_arr.length){
//     console.log(i)
//     i++;
// }

// let my_arr=[77,33,3,332,34544,78]
// let i=0;
// do{
//     console.log(i)
//     i++;
// }while(i<my_arr.length)
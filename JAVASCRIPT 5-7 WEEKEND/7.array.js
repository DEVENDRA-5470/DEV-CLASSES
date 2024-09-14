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
// let my_arr=[45,89,90,78,2,3,5,63,2]
// for(let i=0 ;i<my_arr.length ; i++){
//     if(my_arr[i]%2==0){
//         console.log("EVEN:",my_arr[i])
//     }
// }

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

// let my_marks=[12,22,33,23,10]
// let first=my_marks[0]
// let last=my_marks.length-1
// my_marks[0]=my_marks[last]
// my_marks[last]=first
// console.log(my_marks)

// In-builted method
// push()
// let my_arr=[1,2,4]
// my_arr.push(34)
// my_arr.push(4)
// console.log(my_arr)

// let my_arr=[]
// for(let e=0 ; e<=10 ;e++){
//     my_arr.push(e)
// }
// console.log(my_arr)


// pop()
// let my_arr=[2,3,4,5,9]
// my_arr.pop()
// console.log(my_arr)

// unshift 
// let my_arr=[2,3,4,5,9]
// my_arr.unshift(34)
// console.log(my_arr)


// shift 
// let my_arr=[2,3,4,5,9]
// my_arr.shift(34)
// console.log(my_arr)


// reverse
// let my_arr=[2,3,4,5,9]
// my_arr.reverse()
// console.log(my_arr)

// concat
// let first_arr=[2,3,4,5,9]
// let last_arr=['dev','stayam','khwaish']
// let one=first_arr.concat(last_arr)
// console.log(one)

// include()
// let first_arr=[2,3,4,5,9]
// let res=first_arr.includes(20)
// console.log(res)

// join()
// let first_arr=['aman','shivani','khwaish','harshita']
// let res=first_arr.join()
// let res=first_arr.join(' ')
// let res=first_arr.join('-')
// console.log(res)

// indexOf()
// let first_arr=['aman','shivani','khwaish','harshita']
// let res=first_arr.indexOf('shivani')
// console.log(res)

// let first_arr=['aman','shivani','khwaish','harshita']
// for (let i=0; i<first_arr.length  ; i++){
//     let size=first_arr[i].length
//     console.log( first_arr[i] ,'=' ,size)
// }



// Array destructuring.
// Array destructuring allows you to unpacke value of array into different variable.

//1.copy
// let my_arr=[2,3,4,5,67,90]
// console.log(my_arr)
// let new_arr=[...my_arr]
// console.log(new_arr)

// // 2 Basic strucutring
// let my_arr=[2,3,4,5,67,90]
// let [a,b,c,d]=my_arr;
// console.log(a,b,c,d)

// 3 skipping elements
// let my_arr=[2,3,4,5,67,90]
// let [first,,thired,,fifth]=my_arr;
// console.log(first,thired,fifth)

// 4.Rest operator(...)
// let my_arr=[2,3,4,5,67,90]
// let [first,...rest]=my_arr;
// console.log(first,rest)

// 2 Default values
// let my_arr=[2]
// let [a,b=30,c=90]=my_arr;
// console.log(a,b,c)


// Array structuring.--------------------------------
// Array structuring refers to the process of creating arrays in a sturctured way.

// // 1. Basic structuring...
// let [a,b,c]=[1,2,4]
// console.log(a,b,c)

// 2. nested array
// let [a,[b,c]]=[1,[2,4]]
// console.log(a,b,c)

// 3. Swapping
// let a=1,b=2;
// [a,b]=[b,a]
// console.log(a)
// console.log(b)

// 4. Ignoring values

// let [a, ,b]=[1,2,3]
// console.log(a,b)
// Properties of arrary
// Creation of arrary
// Accessing of array
// Modifying of array
// Traversing of array
// In-builted methods of array
// Array structuring
// Array destructuring
// Assignments

// Properties :
// 1.Array is data structure used to store multiple value of different types of data.
// 2.Array is mutable ,means use can change elment of array after creating also.
// 3.Array support indexing and length and its index start from 0.
// 4.In javascript, arrays are Dynamic.
// 5.Array have many in-builted methods.

// Creation of array :
// 1.using  square([])
// let stu_name=['shivani','babita','abhinav','aaditya','dev']
// console.log(stu_name)

// // 1.using  new keyword Array()
// let new_stu = new Array('shivani','babita','abhinav','aaditya','dev')
// console.log(new_stu)



// ---------------- Accessing of elements
// let stu_name=['shivani','babita','abhinav','aaditya','dev'];
// let data=stu_name[(stu_name.length)-1];
// let i=stu_name.length;
// let data1=stu_name[i];
// console.log(data1);


// ---------------- Modification of elements
// let stu_name=['shivani','babita','abhinav','aaditya','dev'];
// stu_name[1]=1000
// stu_name[2]="Dreamer Infotech"
// console.log(stu_name);


// ---------------- Traversing of array
// 1.For loop
// console.log("---------------------- For loop ------------------")
// let stu_name=['shivani','babita','abhinav','aaditya','dev'];
// let size=stu_name.length
// for (let i=0 ;size>i ;i+=1){

//     console.log(stu_name[i])
// }



// 2.For in loop
// console.log("---------------------- For in loop ------------------")
// let stu_name=['shivani','babita','abhinav','aaditya','dev'];
// for (i in stu_name){
//     console.log(stu_name[i],":",i)
// }


// 3.For of loop
// console.log("---------------------- For of loop ------------------")
// let stu_name=['shivani','babita','abhinav','aaditya','dev'];
// for (i of stu_name){
//     console.log(i)
// }


// // 4.While loop 
// console.log("---------------------- While loop ------------------")
// let stu_name=['shivani','babita','abhinav','aaditya','dev'];
// let s=stu_name.length
// let i=0;
// while(i<s){
//     console.log(stu_name[s-1])
//     s--;
// }


// 4.Do While loop 
// console.log("---------------------- Do While loop ------------------")
// let stu_name=['shivani','babita','abhinav','aaditya','dev'];
// let s=stu_name.length
// let i=0;
// do{43
//     console.log(stu_name[i])
//     i++;
// }while(i<s)

let num=[10,20,40,50,60]

// ---------------In-builted methods of array

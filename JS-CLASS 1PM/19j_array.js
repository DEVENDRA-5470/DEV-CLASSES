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
// do{
//     console.log(stu_name[i])
//     i++;
// }while(i<s)


// ---------------In-builted methods of array
// push : Add an element last.
// let num=[10,20,40,50,60]
// num.push(20)
// console.log(num)

// unshift : Add ele at start.
// let num=[10,20,40,50,60]
// num.unshift(20)
// console.log(num)

// shift : Remove ele from start.
// let num=[10,20,40,50,60]
// num.shift()
// num.shift()
// console.log(num)

// pop() : Remove element from last.
// let num=[10,20,40,50,60]
// let poped=num.pop()
// console.log(num)
// console.log(poped)


// Reverse (): Return reversed element of array.
// let num=[10,20,40,50,60]
// num.reverse()
// console.log(num)

// // includes (): Return the presence of elemnt in the array.
// let num=[10,20,40,50,60]
// data=num.includes(10)
// console.log(data)


// indexof (): Return the index position of elemnt in the array.
// let num=[10,20,40,50,60,10,23,89,10]
// data=num.indexOf(10,6)
// console.log(data)


// lastindexof (): Return the last index of given element in the array.
// let num=[10,20,40,50,60,10,23,89,10];
// data=num.lastIndexOf(10);
// console.log(data);


// Concate ()
// let first_c=["dev","shivani","aditya","abhnav"];
// let second_c=["babita",
//     "monika",
//     "nitesh",
//     "arjun"];
// let third_c=first_c.concat(second_c)
// console.log(third_c);


// slice (start:0,endpoint): Return a shallow copy of a portion form statindex to endindex.
// let first_c=["dev","shivani","aditya","abhnav"];
// let second_c=first_c.slice(2,3)
// console.log(second_c);
// console.log(first_c); // original array remain same.

// splice(startindex,deletecount,item1,item2,item3,....)
// Remove():
// let arr=[1,2,3,4,6,7,8,9,10]
// arr.splice(2,0,"x","y")
// // // arr.splice(0)
// console.log(arr)


// Replace():
// let arr=[1,2,3,4,6,7,8,9,10]
// arr.splice(1,0,"babita","abhinav")
// // arr.splice(0)
// console.log(arr)

// -------------- Array Destructuring..
// Array destructuring allow you to unpack values from array or iterables
// into distinct variable
// It allow to store multiple value of an array in single a variables

// 1.Basic Sturcturing
// let stu_name=["shivani","dev","babita","nisha","aditya"]
// let [u1,u2,u3,u4]=stu_name;
// console.log(u1,u2,u3,u4)

// 2. Skipping Elements
// let stu_name=["shivani","dev","babita","nisha","aditya"]
// let [u1, , ,u2]=stu_name;
// console.log(u1,u2)

// 3.Rest Operator.
// let stu_name=["shivani","dev","babita","nisha","aditya"]
// let [u1,,u2,...all]=stu_name;
// console.log(u1,u2)
// console.log(all)

// 4.Default values
// let stu_name=["shivani","babita"]
// let [u1,u2,u3="d"]=stu_name;
// console.log(u1)
// console.log(u2)
// console.log(u3)


//----------------- Array Structuring...
// Array structuring refers to the process of creating
// a array in a structured way ,either by directly assigning
// values to it or by using the spread operator or rest operator.

// 1.Basic Structuring.
// let [a,b,c,d="x"]=[1,2,3,10];
// console.log(a,b,c,d);

// 2.Nested Structuring.
// let [a,[b,c]]=[10,['babita','shivani']]
// console.log(a,b,c)

// 3.Swapping Vaiables
// let a="dreamer" ,b="infotech";
// [a,b]=[b,a]
// console.log(a,b)

// 4.Skipping values
// let [u1,,u2,,u3]=['dreamer','infotech','faridabad','javascript','a','b']
// console.log(u1)
// console.log(u2)
// console.log(u3)

// 5.Spread opertor
let a=[1,2,3];
let b=[4,5,6];
let c=[...b,...a];
console.log(c)
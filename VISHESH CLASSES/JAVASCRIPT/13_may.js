// variables
// operators
// conditionals statements - assignment running
// loops - assingment pending
// Data structure - Array,object,string,



// Array Defination.
// Array Creation.
// Array Updation.
// Array Traversion.
// Array in-built methods.

// Array Defination.
// Array is a data structure used to store mutltiple data of different types in one variable.

//////////////////////////////////////////////////////////////// Array Creation.
// let mark = new Array()
// mark=[78,90,90]
// let stu_marks=[12,23,50,90,98]
// length_count form 1.
// index_cont form 0.
// last_index = len - 1
// console.log(stu_marks.length)
// let a=stu_marks.length
// console.log(stu_marks[0])
// console.log(stu_marks[4])
// console.log(stu_marks[a-1])
// console.log("BEFORE",stu_marks)

///////////////////////////////////////////////////////////////////////////Array Update
// stu_marks[4]="Aman"
// stu_marks[0]=['Dev','Visesh','React']
// console.log("AFTER",stu_marks)
// console.log(stu_marks[0][1])

////////////////////////////////////////////////// Array Traverse. (for loop, while loop,do while loop,for in loop,for of loop,foreach loop)

// let data=new Array()

// data=['Dev',"Vishesh",67,90,30]

// 1.for loop
// for (let i=0 ; i<data.length ; i++){
    //     console.log(i)
    // }
    // console.log(data)


 // 2.while loop
// let i=0;
// while (i<data.length){
    //     console.log(data[i])
    //     i++;
    // }
        

// 3.for of loop
// for (i of data){
//     console.log(i)
// }

// 4.for in loop
// for (i in data){
//     console.log(data[i])
// }


// Wap to find out the all even number from the given array.
// let my_arr=[40,23,20,45,6,90,23,21,30]



////////////////////////////////////////////////// Array in-built methods.

// let my_arr=[]
// push() ; add element at the last index of array.
// pop() ; remove element from the last of the array..

// my_arr.push(23)  
// my_arr.push(67)
// console.log(my_arr)


// loop => 1-10 jo number generate hoga loop se . us number ek empty array ke andar fill karna hai.

// let my_arr=[]
// // unshift() ; add element at the starting of the array..
// shift() ; remove element at the starting of the array..
// my_arr.unshift(23) 
// my_arr.unshift(67)
// my_arr.unshift(60)
// console.log(my_arr)


// let my_arr=[23,89,9,67,78]
// // shift() ; remove element at the starting of the array..
// console.log(my_arr)
// my_arr.shift()
// my_arr.shift()
// console.log(my_arr)


// let my_arr=[23,89,9,67,78]
// // pop() ; remove element from the last of the array..
// console.log(my_arr)
// my_arr.pop()
// console.log(my_arr)


// let my_arr=[23,89,9,67,78]
// // include() ; check the availibility of element and return true/false..
// let res=my_arr.includes(9)
// console.log(res)


// let my_arr=[23,89,9,67,78,9,40]
// // reverse() ; Reverse the array.
// let res=my_arr.reverse()
// console.log(res)


// let my_arr=[23,89,9,67,78,9,40]
// indexOf() ; Return the index of first element occurs.
// let res=my_arr.indexOf(9,3)
// console.log(res)


// let my_arr=[23,89,9,67,78,9,40]
// let res =my_arr.at(4)
// console.log(res)


// let my_arr=[23,89,9,67,78,9,40]
// let my_arr2=[23,89,9,'aman','dev',66,20]
// let res =my_arr.concat(my_arr2)
// // let res =my_arr+my_arr2
// console.log(res)

        // [0  1  2  3  4  5  6   7]
// let my_arr=[10,30,40,50,60,60,70,80]
// res=my_arr.copyWithin(2,4)
// res=my_arr.copyWithin(target , start , end)
// res=my_arr.copyWithin(1,2,6)
// console.log(res)


// let my_arr=[10,30,40,50,60,70,80,90]
// // res=my_arr.slice(0,-3)
// res=my_arr.slice(0,3)

// console.log(res)
// console.log(my_arr)


// let my_arr=[10,30,40,50,60,70,80,90]
// res=my_arr.splice(0,4,1000,12,78,89,44,666,899,"dev")
// console.log(my_arr)
// console.log("Deleted:",res)

// let my_arr=[10,30,40,50,60,70,80,90]
// res=my_arr.join(",")
// console.log(res)










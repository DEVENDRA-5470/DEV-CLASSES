                  // Objects--------------------------------------------
//1.Properties
// 2.Creation
// 3.Accessing
// 4.Modification
// 5.Traversing
// 6.In-builted method.
// 7.Assignments.

// 1.Properties-----------------------------------
// 1.Objects are data structure which is store the data in key:value form of different types of data.
// 2.Objects key must be unique.
// 3.Objects are mutable(changeable).
// 4.Objects are create by using {} symbol.

//---------------- Creation of objects
// 1.Using {}

// let profile={
//     name:'Rahul',
//     age:29,
//     gender:'male',
//     hobbies:['cricket','gaming']
// }
// console.log(profile)

// 2.Using new keyword.
// let profile= new Object();
// profile.name='khwaish',
// profile.age=20
// console.log(profile.name)
// console.log(profile.age)


//-------------------------- Accessing of objects
// let profile={
//     name:'Rahul',
//     age:29,
//     gender:'male',
//     hobbies:['cricket','gaming']
// }
// console.log(profile.age)
// console.log(profile.name)


//-----------------------------Modification
// let profile={
//     name:'Rahul',
//     age:29,
//     gender:'male',
//     hobbies:['cricket','gaming']
// }
// console.log(profile)
// profile.name='dev'
// console.log(profile)

// -------------------------- Methods
// let profile={
//     name:'Rahul',
//     age:29,
//     gender:'male',
//     hobbies:['cricket','gaming']
// }
// let key=Object.keys(profile)
// let value=Object.values(profile)
// let entry=Object.entries(profile)
// console.log(key)
// console.log(value)
// console.log(entry);


// seal() : It prevents new properties from being added to an object but can change existing values.
// let profile={
//     name:'Rahul',
//     age:29,
//     gender:'male',
//     hobbies:['cricket','gaming']
// }
// profile.mobile="87I09809890"
// console.log(profile)
// Object.seal(profile)
// profile.email="xfre@gmail.com"
// profile.name="dev"
// console.log(profile)

// Freeze(): freeze an object tohe code cannot delete or change,add its property.
// let profile={
//     name:'Rahul',
//     age:29,
//     gender:'male',
//     hobbies:['cricket','gaming']
// }
// profile.mobile="87I09809890"
// console.log(profile)
// Object.freeze(profile)
// profile.email="xfre@gmail.com"
// profile.name="dev"
// console.log(profile)

//------------------------- Traversing
// 1.for loop
// let profile={
//     name:'Rahul',
//     age:29,
//     gender:'male',
//     hobbies:['cricket','gaming']
// }
// let key=Object.keys(profile)
// for (let i = 0 ; i < key.length ; i++){
//     console.log(key[i],profile[key[i]])
// }

// 2.while loop
// let profile={
//     name:'Rahul',
//     age:29,
//     gender:'male',
//     hobbies:['cricket','gaming']
// }
// let key=Object.keys(profile)
// let i=0;
// while(i<key.length){
//     console.log(key[i],profile[key[i]])
//     i++;
// }

// // 3.for in loop
// let profile={
//     name:'Rahul',
//     age:29,
//     gender:'male',
//     hobbies:['cricket','gaming']
// }
// for (i in profile){
//     console.log(i,profile[i])
// }

// 4.for of loop
// let profile={
//     name:'Rahul',
//     age:29,
//     gender:'male',
//     hobbies:['cricket','gaming']
// }
// for (let i of Object.entries(profile)){
//     console.log(i)
// }
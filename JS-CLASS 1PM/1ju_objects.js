// ------------ Objects
// --------------------------Properties
// 1.Objects are user-defined data structure which store data of different types.
// 2.Object store Data in form key:value pair into {} with comma sepetated.
// 3. Objects Key must be unique.
// 4. Objects are mutable(changeable).

//--------------------------Creation Objects.
// 1. Using {}.
// const stu_data={
//     name:'Aditya',
//     age:17,
//     marks:90,
//     mob:80809000,
//     address:{city:'Delhi',state:'Delhi',country:'India'},
//     nick_name:['A','B','C']

// }
// console.log(stu_data);

// // 2.Using new Object
// const stu_data1=new Object();
// stu_data1.name='Aditya';
// stu_data1.age=18;
// stu_data1.marks=[90,78,89,89,90]
// stu_data1.mob=80809000;

// console.log(stu_data1)

// ------------------ Accessing
// const stu_data={
//         name:'Aditya',
//         age:17,
//         marks:90,
//         mob:80809000,
//         address:{city:'Delhi',state:'Delhi',country:'India'},
//         nick_name:['A','B','C'],
//         show:function(){
//             console.log(`My name is ${this.name} and ${this.age} my City ${this.address.city}`);
//         }
    
//     }
// // console.log(stu_data.name)
// // console.log(stu_data.address)
// // console.log(stu_data.nick_name)

// stu_data.show()

// ----------------------- update
// const stu_data={
//     name:'Aditya',
//     age:17,
//     marks:90,
//     mob:80809000,
//     address:{city:'Delhi',state:'Delhi',country:'India'},
//     nick_name:['A','B','C'],
//     show:function(){
//         console.log(`My name is ${this.name} and ${this.age} my City ${this.address.city} You contact me on ${this.mob}`);
//     }

// }
// console.log(stu_data.mob)
// stu_data.mob=909090909
// stu_data.show()


//----------------------- Methods.
// keys()
// const stu_data={
//     name:'Aditya',
//     age:17,
//     marks:90,
//     mob:80809000,
//     address:{city:'Delhi',state:'Delhi',country:'India'},
//     nick_name:['A','B','C'],
//     show:function(){
//         console.log(`My name is ${this.name} and ${this.age} my City ${this.address.city}`);
//     }

// }
// let obj_key=Object.keys(stu_data);
// console.log(obj_key)


// Values()
// const stu_data={
//     name:'Aditya',
//     age:17,
//     marks:90,
//     mob:80809000,
//     address:{city:'Delhi',state:'Delhi',country:'India'},
//     nick_name:['A','B','C'],
//     show:function(){
//         console.log(`My name is ${this.name} and ${this.age} my City ${this.address.city}`);
//     }

// }
// let obj_key=Object.values(stu_data);
// console.log(obj_key)

//entries()

// 

// // seal() : Prevents  new properties from being added to an object and
// // values of present properties can still be Changed.
// const stu_data={
//     name:'Aditya',
//     age:17,
//     marks:90,
//     mob:80809000,
//     address:{city:'Delhi',state:'Delhi',country:'India'},
//     nick_name:['A','B','C'],
//     show:function(){
//         console.log(`My name is ${this.name} and ${this.age} my City ${this.address.city}`);
//     }

// }
// stu_data.hobby='call of duty';
// console.log(stu_data)
// let obj_key=Object.seal(stu_data);
// stu_data.result='Fail';
// stu_data.hobby='Pubg';

// console.log(stu_data)


// freeze() :Other data can not delete or change its properties.
// Prevents new properties from being added.
// const stu_data={
//     name:'Aditya',
//     age:17,
//     marks:90,
//     mob:80809000,
//     address:{city:'Delhi',state:'Delhi',country:'India'},
//     nick_name:['A','B','C'],
//     show:function(){
//         console.log(`My name is ${this.name} and ${this.age} my City ${this.address.city}`);
//     }

// }
// stu_data.hobby='call of duty';
// console.log(stu_data)
// let obj_key=Object.freeze(stu_data);
// stu_data.result='Fail';
// stu_data.hobby='Pubg';

// console.log(stu_data)

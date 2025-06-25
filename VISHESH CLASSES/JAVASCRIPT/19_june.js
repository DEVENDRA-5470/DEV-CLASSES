// Objects Defination.
// objects Creation.
// objects replacement
// objects Traversion.
// objects in-built methods.

//========================== Objects Defination.
// 1.Objects are group of (data/data-member,attributes) and (methods/fetures/functiallity).
// 2. in js object is stored value in key:value pair format.
// 3. Objects are not support indexing.
// 4. Key must be unique.
// 5. Objects are mutable(changeable).

// ================ objects Creation.

// let user_data={
//     user_name:"Vishesh", // data / method
//     user_name1:"Dev", // data / method

//     talk:function(){
//         console.log("I can tal..")
//     },
//     user_subject:["math","english","computer"],
//     user_age:20,
//     user_address:"xyz-123",
//     user_details:function(){
//         return [this.user_name , this.user_name1,this.user_age ,this.user_address]
//     }

// }


// console.log(user_data.user_name1)
// console.log(user_data.user_address)
// console.log(user_data.user_details())


// let user_profile={
//     name:"aman",
//     username:"aman_1224",
//     age:34,
//     bio:"i am coder",
//     hobbies:["coding","singing","cooking"],
//     password:"root@123"
// }


// user_profile.bio="i am pro-coder"
// user_profile.hobbies.push("gaming")
// console.log(user_profile)



// objects Traversion.

let user_profile={
    name:"aman",
    username:"aman_1224",
    age:34,
    bio:"i am coder",
    hobbies:["coding","singing","cooking"],
    password:"root@123"
}


// objects in-built methods.
// let keys=Object.keys(user_profile)
// console.log(keys)

// let val=Object.values(user_profile)
// console.log(val)

// let ent=Object.entries(user_profile)
// console.log(ent) // return data in array format






// for loop
// for (let i=0 ; i< keys.length ; i++){
//     console.log(`${keys[i]} : ${user_profile[keys[i]]} `)
// }

// for of loop
// for (let k in user_profile){
//     console.log(k,":",user_profile[k])
// }

Object.keys(user_profile).forEach(key=> console.log(key , ":" ,user_profile[key]))

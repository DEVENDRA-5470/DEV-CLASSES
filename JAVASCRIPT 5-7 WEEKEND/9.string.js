// ------------------------------------- String
//1.Properties
// 2.Creation
// 3.Accessing
// 4.Modification ❌
// 5.Traversing
// 6.In-builted method.
// 7.Assignments.

// 1.Properties
// 1.String is a data structure used to store series of charecter it can be name ,email,address,phone,age.
// 2.String support indexing,traversing and ordering.
// 3.String has many in-builted methods.
// 4.String created by using '',"" (``)fragments

// 2. Creation of string
// 1.Using new keyword
// let my_name= new String('dev')
// console.log(my_name)

// 2. using ("") , ('') , (``)
// let stu_name='Dev'
// let email='ysdevn@gmail.com'
// let company_name=`Dreamer infotech 
//  It institute 
//  Faridabad Haryana`
// console.log(stu_name)
// console.log(email)
// console.log(company_name)
// console.log('Student Name:',stu_name +'\n', 'Student Email :' ,email +'\n', 'Company :' ,company_name)

// console.log(`
// Student Name: ${stu_name} 
// Student Email :${email}
// Company : ${company_name}`)

// 3. Accessing of string
// let company_name=`Dreamer infotech`
// console.log(company_name[1])
// console.log(company_name[10])
// let size=company_name.length
// console.log(company_name[size-1])

// 4.Traversing-----------
// 1.for loop
let company_name=` Dreamer infotech `
for (let i=0 ; i<company_name.length ; i++){
    
    console.log(`${company_name[i]}`)
}


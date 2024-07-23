// For each loop
let myarr=['shivani','babita','aditya','dev']
// let res=myarr.forEach(function(i,e){
//     console.log(i)
//     console.log(e)

// })

let res=myarr.forEach((e,i,v)=>{
    console.log(`${e} : ${i} : ${v}`)

})
// ---------------- map function 
// let price=[2,4,6,7,8,9]
// let nwp=[]
// for(e of price){
//     nwp.push(e*2)
// }
// console.log(nwp)

// let price=[2,4,6,7,8,9]
// function double_price(n){
//     return n*2
// }
// let res=price.map(double_price)
// console.log(res)

// let price=[2,4,6,7,8,9]
// function double_price(n){
//     return n*2
// }
// let res=price.map(double_price)
// console.log(res)

// let price=[2,4,6,7,8,9]
// let res=price.map(n=>n*2)
// console.log(res)

let array=["shivani","Dev","Abhinav","aaditiya", "aarav","ankita","kajal"];
function filter_name(n){
   for(i of n){
    for (v in i){
        if(i[0]=="s"){
            return true;
        }
    }
   }
}
let res=array.filter(filter_name)
console.log(res)
// A promise in javascript is like a guarantee that something will happen
// in the future.
// It represents a task (like getting data from a server) that is happening
// in the background.

// A Promise Can have three phases:
// 1.Pending : it will waiting to finish.
// 2.Resloved(Fullfilled) : The task completed sucessfully.
// 3.Reject  : The task failed.


// Think of it as ordering food at a restaurant :
// 1.You place your order (Promise is created).
// 2.While you wait other things can happen (Promise is pending).
// 3.You get your food (the promise is fullfilled) Or something goes wrong (the promise is rejected).

// You can use .then() to do something when the promise fullfilled.
// and .catch() to handle errors if the promise rejected.

// let my_promise= new Promise( (resolve,reject)=>{
//     let pizza_ready=0;

//     if(pizza_ready){

//         resolve("Your Pizza is ready to serve 🍕")
//     }

//     else{
//         reject("Sorry we are out of Pizza stock ❌")
//     }
// } )

// my_promise
// .then((message)=>{console.log(message)})
// .catch((message)=>{console.log(message)})


function order_pizza(){
    return new Promise((resolve,reject)=>{
        let pizza_ready=0;

        if (pizza_ready){
            resolve("Your Pizza is ready to serve 🍕")
        }

        else{
            reject("Sorry we are out of Pizza stock ❌") 
        }

    })

}

async function serve_pizza(){
    try{
        // Await the promise and handle the resolve value.
        let status= await order_pizza();
        console.log(status)
    }
    catch (error){
        console.log(error)
    }
}

serve_pizza()
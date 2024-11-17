// set time out
function fun(){
    document.body.style.background="red"
}
let my_time=setTimeout(fun,5000)
clearTimeout(my_time)



function call_me(){
    let c=0
    let count=setInterval(function()
    {
        c=c+100
        document.body.innerHTML=c+"+" 
        console.log(c)
        if (c==5000){
            clearInterval(count)
        }
    }
       
    ,100)
}





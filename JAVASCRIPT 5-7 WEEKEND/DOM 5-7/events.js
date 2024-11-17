// keyboard events.

let p1=document.getElementById("p1")
function on_key_press(){
    p1.innerHTML="I am javascrip"
}
function on_key_up(){
    p1.innerHTML="I am key up"
    console.log("hello")
}

// mouse events
function on_click(){
    p1.style.color="red"
}

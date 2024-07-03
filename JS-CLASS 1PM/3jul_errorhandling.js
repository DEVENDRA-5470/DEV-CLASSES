let a = 10;
let b = 0;
try {
    res = a / c;
    console.log(res);
}
catch {
    console.log("Something went Wrong");
}
finally {
    console.log("This will always execute");
}


let arr = [];
let size = Number(prompt("Enter Size : "));
try {
    for (let i = 1; i <= size; i++) {
        let user = Number(prompt(`ENTER YOUR ITEM ${i} `))
        arr.push(user)

    }
    document.write(arr)
}
catch {
    throw new alert("Wrong credentials..❌")
}

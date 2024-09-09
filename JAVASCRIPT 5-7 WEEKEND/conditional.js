// let a=10;
// let b=20;
// if(a<b){
//     console.log("How are you")
// }
// else{
//     console.log("NOT BAD")
// }

// 3.Logical operator (and(&&),or(||),not(!))
// let a=10
// let b=60
// let res= !(b==60 && a==10 && a>60 )
// console.log(res)


// let age=19;
// if (age){
//     console.log("YES 1")
// }
// if (age==19){
//     console.log("YES 2")
// }
// if (age<10){
//     console.log("YES 3")
// }
// if (age>50){
//     console.log("YES 4")
// }
// if (age>10){
//     console.log("YES 5")
// }
// if (age>7){
//     console.log("YES 6")
// }
// else{
//     console.log("NO")
// }


// let age=19;
// if (age<7){
//     console.log("YES 1")
// }
// else if (age==19){
//     console.log("YES 2")
// }
// else if (age<10){
//     console.log("YES 3")
// }
// else if (age>50){
//     console.log("YES 4")
// }
// else if (age>10){
//     console.log("YES 5")
// }
// else if (age>7){
//     console.log("YES 6")
// }
// else{
//     console.log("NO")
// }

// let stu_marks=Number(prompt("ENTER YOU MARKS : "))
// if (stu_marks<=100 && stu_marks>=90){
//     document.write("A GRADE")
// }
// else if(stu_marks<=89 && stu_marks>=80){
//     document.write("B GRADE")
// }
// else if(stu_marks<=79 && stu_marks>=60){
//     document.write("C GRADE")
// }
// else{
//     document.write("Invalid")
// }


// NESTED IF ELSE
// let a=40;
// if (a==40){
//     console.log("YES 1")
//     if (a>20){
//         console.log("YES 2")
        
//         if(a<30){
//             console.log("YES 3")
//         }
//         else{
//             console.log("NO 3")
//         }
//     }
//     else{
//         console.log("NO 2")
//     }
// }
// else{
//     console.log("NO 1")
// }


// B-TECH ELIGIBLITY CHECKER

let stu_name=String(prompt("ENTER YOU NAME :"))
if (stu_name){
    let stu_marks=Number(prompt("ENTER YOUR MARKS % IN 12TH :"))
    if(stu_marks>=70){
        let stu_stream=String(prompt("ENTER YOUR YOUR STREAM IN CAPS: "))
        if (stu_stream=="PCM" || stu_stream=="pcm"){
            alert("YOUR ARE ELIGIBLE FOR ADDMISSON")
        }
        else{
            alert("PLSEAE IN VALID STREAM ")
        }
    }
    else{
        alert("PLEASE ENTER VALID MARKS ")
    }
}
else{
    alert("PLEASE PROVIDE YOUR NAME ...☠️")
}
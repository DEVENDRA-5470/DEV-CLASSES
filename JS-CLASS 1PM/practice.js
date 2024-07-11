let n=123
let rev=0;
while (n>0){
    console.log(n)
    rem=n%10;
    rev=(rev*10)+rem
    n=parseInt(n/10)
}
console.log(rev)
let ar=['Dreamer','infotech']
let s=""
for(let a of ar){
    s=s+a
}

let all_v=''
let all_c=''
let v='aeiou'
for(let t of s){
    if (v.includes(t)){
        all_v=all_v+t
    }
    else{
        all_c=all_c+t
    }

}
console.log(all_v)
console.log(all_c)


// find vowel and consonants
let ar=['Dreamer','infotech']

let newstr=String(ar)
let str=newstr.split('')
let v='aeiou'
let all_vowel=[]
let all_consonant=[]
for(let a=0;a<str.length ;a++){
    if (v.includes(str[a])){
        all_vowel.push(str[a])
    }
    else{
    
        all_consonant.push(str[a])
        }
}
console.log(all_vowel)
console.log(all_consonant)

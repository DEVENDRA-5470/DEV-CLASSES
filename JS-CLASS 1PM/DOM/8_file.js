let header=document.createElement('header')
// appending header into body tag
document.body.appendChild(header)

let nav=document.createElement('nav')
nav.style.display="flex"
nav.style.background="teal"
nav.style.color="white"
nav.style.justifyContent="space-around"
nav.style.alignItems="center"
nav.style.padding="20px"
header.appendChild(nav)

let logo_div=document.createElement('div')
logo_div.className="logo"
nav.appendChild(logo_div)

let h2_for_name=document.createElement('h2')
h2_for_name.innerText="Dreamer"
logo_div.appendChild(h2_for_name)

let menu_div=document.createElement('div')
menu_div.className="menu"
nav.appendChild(menu_div)

let ul=document.createElement('ul')
menu_div.appendChild(ul)

let lis=[]
for (let i=1 ; i<=5 ; i++){
    let li=document.createElement('li')
    li.style.listStyle="none"
    li.style.display="inline"
    li.style.margin="10px"
    lis.push(li)

}

for (let i=0 ; i<lis.length ; i++){
    
    if (i==0){lis[i].innerHTML=`<a href="">Home</a>`}
    if (i==1){lis[i].innerHTML=`<a href="">About</a>`}
    if (i==2){lis[i].innerHTML=`<a href="">Service</a>`}
    if (i==3){lis[i].innerHTML=`<a href="">Contact</a>`}
    if (i==4){lis[i].innerHTML=`<a href="">Blogs</a>`}
    ul.appendChild(lis[i])
}
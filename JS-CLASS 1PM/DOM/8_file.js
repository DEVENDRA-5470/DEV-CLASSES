// alert()
// CreateElement(): method to create html tags.
let header=document.createElement('header')
header.style.background="teal"
header.style.color="white"
header.style.padding="15px"
document.body.appendChild(header)

let nav=document.createElement('nav')
nav.style.display="flex"
header.appendChild(nav)

// logo div
let logo_div=document.createElement('div')
logo_div.className="my_logo"
nav.appendChild(logo_div)
let logo_h1=document.createElement("h1")
logo_div.appendChild(logo_h1)
logo_h1.innerText="Dreamer"


// menu div
let menu_div=document.createElement('div')
menu_div.className="my_menu"
nav.appendChild(menu_div)
let ul=document.createElement('ul')
menu_div.appendChild(ul)
// home about service contact blog

let my_menus=[
    {name:"Home",href:"https/dreamerifn.com"},
    {name:"About",href:"https/dreamerifn.com"},
    {name:"About",href:"https/dreamerifn.com"},
    {name:"About",href:"https/dreamerifn.com"},
    {name:"About",href:"https/dreamerifn.com"},
    {name:"About",href:"https/dreamerifn.com"},
]

my_menus.forEach((item,i) => {
    let li=document.createElement('li')
    let a=document.createElement("a")
    a.innerText=item.name
    a.style.textDecoration="none"
    a.style.color="white"
    a.setAttribute('href',item.href)
    li.appendChild(a)
    ul.appendChild(li)

})
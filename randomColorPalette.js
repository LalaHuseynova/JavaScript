let display=document.getElementById('display')
let row1=document.getElementById('row1')
let row2=document.getElementById('row2')
let kod1=''
let kod2=''
for(let i=1;i<=6;i++){
    kod1+=`<div class="square" id="${i}" onclick="changingDisplay(${i})"></div>`
}
for(let i=7;i<=12;i++){
    kod2+=`<div class="square" id="${i}" onclick="changingDisplay(${i})"></div>`
}
row1.innerHTML=kod1
row2.innerHTML=kod2
function changing(){
for(let i=1;i<=12;i++){
    let square=document.getElementById(i)
    square.style.backgroundColor=changingColor()
}
}
function changingDisplay(index){
   let  square=document.getElementById(index)
   let color=square.style.backgroundColor
    display.style.backgroundColor=color

}
function changingColor(){
    let a=rndm(0,256)
    let b=rndm(0,256)
    let c=rndm(0,256)
    return `rgb(${a},${b},${c})`
}
function rndm(min, max) {
return Math.floor(Math.random() * (max - min + 1) ) + min;
}
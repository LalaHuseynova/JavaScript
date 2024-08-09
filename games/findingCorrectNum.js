let table = document.getElementById('tbl')
let arr = [];
let order 
let minutes,seconds,min,sec
let istiming = false;
let saat

initialize()

// TIMER
function basla() {
    if (!istiming) {
        saat = setInterval(timer, 1000)
        istiming = true
    }
}
function timer(){
     minutes=document.getElementById('minutes').innerHTML
     seconds=document.getElementById('seconds').innerHTML
     min=Number(minutes)
     sec=Number(seconds)
    sec++
    if(sec==60){
       gameLose()
       clearInterval(saat)
    
    }
    document.getElementById('minutes').innerHTML = min < 10 ? '0' + min : min;
    document.getElementById('seconds').innerHTML = sec < 10 ? '0' + sec : sec;
}
//
// hem reset hemde baslayir
function initialize(){ 
let kod = ''
order = 1;
let a = 0
arr=[]
clearInterval(saat)
istiming=false
document.getElementById('minutes').innerHTML = '00'
document.getElementById('seconds').innerHTML='00'
for (let i = 1; i <= 16; i++) {
    arr.push(i)
}
arr.sort(() => rndm(-100, 100))
console.log(arr)

for (let i = 0; i < 4; i++) {
    kod += `<tr>`
    for (let j = 0; j < 4; j++) {
        kod += `<td id="${a}" onclick="bozart(${a})">${arr[a++]}</td>`
    }
    kod += `</tr>`
}
table.innerHTML = kod
}

//   Oyunu qazananda 
function gameWin() {
    let alph = ['', '', '', '', 'G', 'A', 'M', 'E', 'W', 'O', 'N', '!', '', '', '', ''];
    let tds = table.getElementsByTagName('td');
    for (let i = 0; i < tds.length; i++) {
        tds[i].style.backgroundColor = 'black';
    }
    for (let i = 4; i <= 11; i++) {
        tds[i].style.color = 'yellow';
        tds[i].innerHTML = alph[i];
    }
}

// OYUNU 1 DQ BITIRMEYENDE
function gameLose() {
    let alph = ['', '', '', '', 'G', 'A', 'M', 'E', 'L', 'O', 'S', 'T', '', '', '', ''];
    let tds = table.getElementsByTagName('td');
    for (let i = 0; i < tds.length; i++) {
        tds[i].style.backgroundColor = 'black';
    }
    for (let i = 4; i <= 11; i++) {
        tds[i].style.color = 'red';
        tds[i].innerHTML = alph[i];
    }
}

function rndm(min, max) {return Math.floor(Math.random() * (max - min + 1)) + min;}
function bozart(a) {
    let td = document.getElementById(a)
    if (order == arr[a]) {
        td.style.backgroundColor = "#eee"
        order++
    } 
    if (order>16) {  gameWin(); clearInterval(saat)}
}

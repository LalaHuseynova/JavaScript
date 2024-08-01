let result=document.getElementById('result')

function convert(){
    let kod=''
    let word=document.getElementById('word').value 
    for(let i=0;i<word.length;i++){
        let colour=changingColor()
        kod+=`<span style="color: ${colour}">${word[i]}</span>`
    }
    result.innerHTML=kod
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
let result=document.getElementById('result')
function convert(){ 
 let word=document.getElementById('word').value 
 let answer=''
 for(let i=0;i<word.length;i++){
     let part1=word.slice(0,i)
     let upper=`<b>${word[i]}</b>`
     let part2=word.slice(i+1)
     answer +=`${part1+upper+part2}<br>`
 }
 result.innerHTML=answer
}
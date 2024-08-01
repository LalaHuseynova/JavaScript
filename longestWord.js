let sentence = document.getElementById('sentence')
let result = document.getElementById('result')
let str
let str2
function convert(){
   str=sentence.value 
   str2=str.split(' ')
   let longest=''
   for(let i=0;i<str2.length;i++){
       if(str2[i].length>longest.length){
           longest=str2[i]
       }
   }
   result.innerHTML=longest
}
let markarr = ['Chevrolet', 'Hyundai', 'KIA', 'Toyota']
let modelarr = [
    ['Cruze', 'Camaro', 'Malibu', 'Aveo'],
    ['Accent', 'Elentra', 'Tucson', 'Creta'],
    ['Rio', 'Optima', 'Sorento', 'Sportage'],
    ['Prius', 'Corolla', 'Prado', 'Supra']]
let marka = document.getElementById('marka')
let model = document.getElementById('model')
for(let i=0;i< markarr.length;i++){
  marka.innerHTML+= `<option value="${i}">${markarr[i]}</option>`
}
function calling(){
  model.innerHTML=''
  if(marka.value==0) byid(0)
  else if(marka.value==1) byid(1)
  else if(marka.value==2) byid(2)
  else byid(3)
}
function byid(index){
    for(let j=0;j<4;j++){ 
  model.innerHTML+= `<option>${modelarr[index][j]}</option>`
    }
}
let display=document.getElementById('display')
function show(){
  display.innerHTML= `
  <h1>Secdiyiniz model ${marka.options[marka.selectedIndex].text} ${model.value}</h1>
<img src="img/x${marka.value}${model.value}.jpeg" alt="">

  `
}
function reset(){
  display.innerHTML=''
  marka.value=''
model.innerHTML =""
  
}
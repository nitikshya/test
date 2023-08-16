let title= document.getElementById('title')
console.log('before:',title.innerText)
title.innerText='Hey! there. Are you alright?'
console.log('after:',title.innerText)
//console.log(innerText.style.colour='red')


// let redDiv= document.getElementById('red')
// let yellowDiv= document.getElementById('yellow')
// let greenDiv= document.getElementById('green')

const square= document.querySelectorAll('.colorsquare')
console.log(square)

//console.log(square[0].value)
//console.log(square[1].value)
//console.log(square[2].value)

//for each loop

const timeclicked={'red':0,'yellow':0,'green':0}
square.forEach(square=>{
  square.onclick=()=>{
    timeclicked[square.value]++
   square.innerText=timeclicked[square.value]
  }
  //square.onclick=()=>console.log(square.id)
})

const cleargameButton=document.getElementById('clear')
cleargameButton.onclick=()=>clearscore()


function clearscore(){
  square.forEach(square=>square.innerText=' ')
}
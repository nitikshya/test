// https://dog.ceo/api/breeds/image/random

//Asynchronous Programming
// const dogimageDiv=document.getElementById('dogimage')
// const dog=document.getElementById('dog')
// const click=()=>{
//  fetch('https://dog.ceo/api/breeds/image/random')
//  .then(response=>response.json())
//  .then(json=>{
//     dogimageDiv.innerHTML=`<img src='${json.message}'height=250 width=250/>`
//    })
// }
// dog.onclick=()=> click()



//superheroes
const heroimageDiv=document.getElementById('heroimage')
const heroo=document.getElementById('heroo')

const superherotoken='1793509237732044'
const baseurl=`https://superheroapi.com/api.php/${superherotoken}`
let comic=(id,name)=>{
   fetch(`${baseurl}/${id}`)
   .then(response=>response.json())
   .then(json=>{
      //console.log(json)
      heroimageDiv.innerHTML += `<img src=${json.image.url} height=250 width=250 />`
   })
}
// comic(25)
let randomnumber= () =>{
   const num=731
   return Math.floor(Math.random()*num)+1
}
heroo.onclick= ()=>comic(randomnumber())

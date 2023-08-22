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
//heroimageDiv.innerHTML=`<img src='${json.message}' height=250,width=250/>`


//superheroes
const heroimage=document.getElementById('heroimage')
const hero=document.getElementById('hero')

const superherotoken='1793509237732044'
const baseurl=`https://superheroapi.com/api.php/${superherotoken}`
let comic=(id,name)=>{
   fetch(`${baseurl}/${id}`)
   .then(response=>response.json())
   .then(json=>{
      //console.log(json)
      document.querySelector('body').innerHTML+= `<img src="${json.image.url}" height=250 width=250 />`
   })
}
let randomnumber= () =>{
   return Math.floor(Math.random*731)
}
hero.onclick= ()=>comic(randomnumber())

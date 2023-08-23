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
      const name=`<h2>${json.name}</h2>`
      const power=`<p>Intelligence:${json.powerstats.intelligence}</p>`
      const speed=`<p>Speed:${json.powerstats.speed}</p>`
      heroimageDiv.innerHTML = 
      `${name}  <img src=${json.image.url} height=250 width=250 />${power} ${speed}`
   })
}
// comic(25)
let randomnumber= () =>{
   const num=731
   return Math.floor(Math.random()*num)+1
}
heroo.onclick= ()=>comic(randomnumber())

const heroButton=document.getElementById('heroButton')
const searchinput=document.getElementById('searchinput')
//searchinput.innerText=
const searchhero=(name)=>{
   console.log(searchinput.value)
fetch(`${baseurl}/search/${name}`)
   .then(response=>response.json())
   .then(json=>{
      const hero=json.results[0]
      console.log(hero)
      heroimageDiv.innerHTML = `<img src=${hero.image.url} height=250 width=250 />`
   })
}
heroButton.onclick=()=>searchhero(searchinput.value)

const statsHTML=(character)=>{

}
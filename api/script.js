// https://dog.ceo/api/breeds/image/random

//Asynchronous Programming
const dogimageDiv=document.getElementById('dogimage')
const dog=document.getElementById('dog')
const click=()=>{
 fetch('https://dog.ceo/api/breeds/image/random')
 .then(response=>response.json())
 .then(json=>{
    dogimageDiv.innerHTML=`<img src='${json.message}'height=250 width=250/>`
   })
}
dog.onclick=()=> click()


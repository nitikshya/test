//Asynchronous Programming

const fu=()=>console.log('HEYYYYY!🙋‍♀️')
const fun=()=>console.log('Remember ME😅')
const func=()=>console.log("It's Nitikshya❤️")
const funt=()=>console.log('Your school friend👯‍♀️')
const funti=()=>console.log('By the way')
const funct=()=>console.log('How are you?')

setTimeout(fu,2000)
setTimeout(fun,3000)
setTimeout(func,4000)
setTimeout(funt,5000)
setTimeout(funti,6000)
setTimeout(funct,7000)

console.log('fetch:',
fetch('https://dog.ceo/api/breeds/image/random')
.then(response=>response.json())
.then(data=>console.log(data))
)

//Async and Await
const getDog=async()=>{
    const url='https://dog.ceo/api/breeds/image/random'
    const response= await fetch(url)
    const data=await response.json()
    console.log(data)
}
getDog()

const promise1=new Promise((resolve,reject)=>{
setTimeout(()=>{
    isReady=[true,false][Math.floor(Math.random()*2)]
    isReady?resolve('your soup is ready🍲'):reject('there is no soup❌')},1000)
})
console.log(promise1
    .then(value=>console.log(value))
    .catch(value=>console.log(value))
)


const getSoup=async()=>{
    const data={rating:null, review:null, pay:null, tip:null}
   try{
    const sou= await promise1
    console.log(sou)
    data.rating=5
    data.review=5
    data.pay=10
    data.tip=.2
    return data
   }
   catch(error){
    console.log(error)
    data.rating=0
    data.review=0
    data.pay=0
    data.tip=0
    return data
   }

}
getSoup().then(value=>console.log(value))